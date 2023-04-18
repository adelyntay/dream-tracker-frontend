import { useState } from 'react';

export default function CreateUserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          value={user.name} required
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={user.email} required
          onChange={handleChange}
        />
      </label>
      <label>
      Password:
      <input
        name="password"
        value={user.password} required
        onChange={handleChange}
      />
    </label>
      <button type="submit">Create User</button>
    </form>
  );
}

