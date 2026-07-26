// src/api.js
const BASE_URL = "http://localhost:3000/api"; // change to your deployed backend URL later

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.message || "Request failed");
  }
  return json.data ?? json;
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