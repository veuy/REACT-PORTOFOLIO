// src/api.js
const BASE_URL = "https://portofolio-backend-848s.onrender.com/api";

function getToken() {
  return localStorage.getItem("token");
}

async function request(path, options = {}) {
  const headers = { "Content-Type": "application/json" };

  // Attach auth token if it exists
  const token = getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    headers,
    ...options,
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.message || "Request failed");
  }
  return json.data ?? json;
}

// Auth helpers
export async function signUp({ firstname, lastname, email, password }) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstname, lastname, email, password }),
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.message || "Sign up failed");
  }
  // The backend returns a token on sign up
  const token = json.data?.token || json.token;
  if (token) {
    localStorage.setItem("token", token);
  }
  return json.data ?? json;
}

export async function signIn({ email, password }) {
  const res = await fetch(`${BASE_URL}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.message || "Sign in failed");
  }
  // Store the token
  const token = json.data?.token || json.token;
  if (token) {
    localStorage.setItem("token", token);
  }
  return json.data ?? json;
}

export function signOut() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return Boolean(getToken());
}

// Generic CRUD factory so we don't repeat this 4 times
function crudApi(resource) {
  return {
    getAll: () => request(`/${resource}`),
    getById: (id) => request(`/${resource}/${id}`),
    create: (data) =>
      request(`/${resource}`, { method: "POST", body: JSON.stringify(data) }),
    update: (id, data) =>
      request(`/${resource}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    remove: (id) => request(`/${resource}/${id}`, { method: "DELETE" }),
  };
}

export const projectsApi = crudApi("projects");
export const servicesApi = crudApi("services");
export const referencesApi = crudApi("references");
export const usersApi = crudApi("users");