import { Link } from "react-router-dom";

const sections = [
  { label: "Manage Projects", path: "/admin/projects" },
  { label: "Manage Services", path: "/admin/services" },
  { label: "Manage References", path: "/admin/references" },
  { label: "Manage Users", path: "/admin/users" },
];

export default function AdminDashboard() {
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
    </main>
  );
}