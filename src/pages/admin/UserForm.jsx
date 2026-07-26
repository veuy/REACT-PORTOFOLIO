import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersApi } from "../../api";

const emptyUser = { firstname: "", lastname: "", email: "", password: "" };

export default function UserForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyUser);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      usersApi
        .getById(id)
        .then((data) =>
          setForm({
            firstname: data.firstname || "",
            lastname: data.lastname || "",
            email: data.email || "",
            password: "",
          })
        )
        .catch((err) => setError(err.message));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      // Don't send empty password when editing
      if (isEditing && !payload.password) {
        delete payload.password;
      }
      if (isEditing) {
        await usersApi.update(id, payload);
      } else {
        await usersApi.create(payload);
      }
      navigate("/admin/users");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-form-page">
      <section className="page-panel">
        <h1>{isEditing ? "Edit User" : "Add User"}</h1>
        {error && <p className="admin-error">{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password{isEditing ? " (leave blank to keep current)" : ""}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required={!isEditing}
            />
          </div>

          <button className="button button-primary" type="submit">
            {isEditing ? "Save Changes" : "Add User"}
          </button>
        </form>
      </section>
    </main>
  );
}