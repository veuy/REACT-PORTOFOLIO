import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../api";

const sections = [
  { label: "Manage Projects", path: "/admin/projects" },
  { label: "Manage Services", path: "/admin/services" },
  { label: "Manage References", path: "/admin/references" },
  { label: "Manage Users", path: "/admin/users" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/");
    window.location.reload(); // refresh to update nav bar
  };

  return (
    <main className="page-shell admin-dashboard">
      <section className="page-panel">
        <h1>Admin Dashboard</h1>
        <p>Manage your portfolio content.</p>
      </section>

      <ul className="admin-links">
        {sections.map((s) => (
          <li key={s.path}>
            <Link to={s.path}>{s.label}</Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <button
          className="button button-danger"
          onClick={handleSignOut}
          style={{ cursor: "pointer" }}
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}
