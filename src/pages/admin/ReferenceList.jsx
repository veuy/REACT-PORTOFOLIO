import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { referencesApi } from "../../api";

export default function ReferenceList() {
  const [references, setReferences] = useState([]);
  const [error, setError] = useState("");

  const loadReferences = () => {
    referencesApi
      .getAll()
      .then(setReferences)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadReferences();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this reference?")) return;
    try {
      await referencesApi.remove(id);
      loadReferences();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-list-page">
      <section className="page-panel">
        <h1>Manage References</h1>
        <Link className="button button-primary" to="/admin/references/new">
          + Add Reference
        </Link>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {references.map((r) => (
            <tr key={r._id}>
              <td>{r.name}</td>
              <td>{r.position}</td>
              <td>{r.company}</td>
              <td className="admin-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/references/${r._id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="button button-danger"
                  onClick={() => handleDelete(r._id)}
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