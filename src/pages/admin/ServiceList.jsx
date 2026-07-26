import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { servicesApi } from "../../api";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  const loadServices = () => {
    servicesApi
      .getAll()
      .then(setServices)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await servicesApi.remove(id);
      loadServices();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-list-page">
      <section className="page-panel">
        <h1>Manage Services</h1>
        <Link className="button button-primary" to="/admin/services/new">
          + Add Service
        </Link>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s._id || s.id}>
              <td>{s.title}</td>
              <td>{s.description}</td>
              <td className="admin-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/services/${s._id || s.id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="button button-danger"
                  onClick={() => handleDelete(s._id || s.id)}
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