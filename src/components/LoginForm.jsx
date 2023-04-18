import { useState } from 'react';
import jwt_decode from "jwt-decode"

export default function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(login),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          name="email"
          placeholder="Email"
          value={login.email} required
          onChange={handleChange}
        />
      </label>
      <label>
      Password:
      <input
        name="password"
        placeholder="Password"
        value={login.password} required
        onChange={handleChange}
      />
    </label>
      <button type="submit">Login</button>
    </form>
  );
}

