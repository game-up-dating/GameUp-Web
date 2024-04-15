import { useState } from "react";
import styles from "./styles/SignUp.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  async function push(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: pass,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  return (
    <div
      className="d-flex align-items-center justify-center"
      style={{ height: "100vh" }}
    >
      <div className={styles.card}>
        <h2>SignUp Form</h2>

        <form className={styles.form} method="POST">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={styles.pass}
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Adress"
            className={styles.email}
          />
          <input
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="password"
            className={styles.pass}
          />
          <button type="submit" onClick={push} className={styles.btnSignin}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
