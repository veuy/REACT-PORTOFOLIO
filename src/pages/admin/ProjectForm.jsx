import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsApi } from "../../api";

const emptyProject = { title: "", completion: "", description: "", image: "" };

export default function ProjectForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyProject);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      projectsApi.getById(id).then((data) =>
        setForm({
          title: data.title || "",
          completion: data.completion ? data.completion.slice(0, 10) : "",
          description: data.description || "",
          image: data.image || "",
        })
      ).catch((err) => setError(err.message));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await projectsApi.update(id, form);
      } else {
        await projectsApi.create(form);
      }
      navigate("/admin/projects");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-form-page">
      <section className="page-panel">
        <h1>{isEditing ? "Edit Project" : "Add Project"}</h1>
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
            <label htmlFor="completion">Completion Date</label>
            <input
              id="completion"
              type="date"
              name="completion"
              value={form.completion}
              onChange={handleChange}
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

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <button className="button button-primary" type="submit">
            {isEditing ? "Save Changes" : "Add Project"}
          </button>
        </form>
      </section>
    </main>
  );
}