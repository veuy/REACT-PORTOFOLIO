import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectsApi } from "../../api";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  const loadProjects = () => {
    projectsApi
      .getAll()
      .then(setProjects)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await projectsApi.remove(id);
      loadProjects();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-list-page">
      <section className="page-panel">
        <h1>Manage Projects</h1>
        <Link className="button button-primary" to="/admin/projects/new">
          + Add Project
        </Link>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Completion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id || p.id}>
              <td>{p.title}</td>
              <td>
                {p.completion
                  ? new Date(p.completion).toLocaleDateString()
                  : "—"}
              </td>
              <td className="admin-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/projects/${p._id || p.id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="button button-danger"
                  onClick={() => handleDelete(p._id || p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}