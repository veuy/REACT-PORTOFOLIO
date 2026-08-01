import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../api";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signUp(form);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell auth-page">
      <section className="auth-card">
        <h1>Sign Up</h1>
        <p className="auth-subtitle">Create your admin account</p>

        {error && <p className="admin-error">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
              placeholder="First name"
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
              placeholder="Last name"
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
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Choose a strong password"
            />
          </div>

          <button
            className="button button-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </section>
    </main>
  );
}