import React, { useState } from "react";

export default function Page1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.linkText}>
          Don't have an account? <span style={styles.link}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    padding: 30,
    background: "white",
    borderRadius: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 16,
  },
  button: {
    padding: 12,
    borderRadius: 10,
    background: "#2575fc",
    color: "white",
    fontSize: 18,
    border: "none",
    cursor: "pointer",
  },
  linkText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
  },
  link: {
    color: "#2575fc",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
