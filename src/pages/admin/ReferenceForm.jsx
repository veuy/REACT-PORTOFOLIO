import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { referencesApi } from "../../api";

const emptyReference = { name: "", position: "", company: "", testimonial: "" };

export default function ReferenceForm() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyReference);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      referencesApi
        .getById(id)
        .then((data) =>
          setForm({
            name: data.name || "",
            position: data.position || "",
            company: data.company || "",
            testimonial: data.testimonial || "",
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
        await referencesApi.update(id, form);
      } else {
        await referencesApi.create(form);
      }
      navigate("/admin/references");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-form-page">
      <section className="page-panel">
        <h1>{isEditing ? "Edit Reference" : "Add Reference"}</h1>
        {error && <p className="admin-error">{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="testimonial">Testimonial</label>
            <textarea
              id="testimonial"
              name="testimonial"
              value={form.testimonial}
              onChange={handleChange}
              required
            />
          </div>

          <button className="button button-primary" type="submit">
            {isEditing ? "Save Changes" : "Add Reference"}
          </button>
        </form>
      </section>
    </main>
  );
}