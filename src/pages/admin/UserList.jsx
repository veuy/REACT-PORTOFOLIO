import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersApi } from "../../api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const loadUsers = () => {
    usersApi
      .getAll()
      .then(setUsers)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await usersApi.remove(id);
      loadUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page-shell admin-list-page">
      <section className="page-panel">
        <h1>Manage Users</h1>
        <Link className="button button-primary" to="/admin/users/new">
          + Add User
        </Link>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <table className="admin-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id || u.id}>
              <td>{u.firstname}</td>
              <td>{u.lastname}</td>
              <td>{u.email}</td>
              <td className="admin-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/users/${u._id || u.id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="button button-danger"
                  onClick={() => handleDelete(u._id || u.id)}
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