import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesApi } from "../../api";

const emptyService = { title: "", description: "" };

export default function ServiceForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyService);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      servicesApi
        .getById(id)
        .then((data) =>
          setForm({
            title: data.title || "",
            description: data.description || "",
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
      if (isEditing) {
        await servicesApi.update(id, form);
      } else {
        await servicesApi.create(form);
      }
      navigate("/admin/services");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-form-page">
      <section className="page-panel">
        <h1>{isEditing ? "Edit Service" : "Add Service"}</h1>
        {error && <p className="admin-error">{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <button className="button button-primary" type="submit">
            {isEditing ? "Save Changes" : "Add Service"}
          </button>
        </form>
      </section>
    </main>
  );
}