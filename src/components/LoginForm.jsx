import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
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

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        navigate("/wall")
      } else {
        throw new Error("Invalid email or password");
      }
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

