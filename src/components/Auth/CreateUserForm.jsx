import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateUserForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      navigate("/login")
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-[35rem]">
        <div>
        <input
          name="username"
          placeholder="Username"
          value={user.username} required
          onChange={handleChange}
          className="my-4 w-full rounded-sm py-2 px-8 bg-black border-b-2 border-red"
          />
          </div>

          <div>
        <input
          name="email"
          placeholder="Email"
          value={user.email} required
          onChange={handleChange}
          className="my-4 w-full rounded-sm py-2 px-8 bg-black border-b-2 border-red"
        />
        </div>

        <div>
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={user.password} required
        onChange={handleChange}
        className="my-4 w-full rounded-sm py-2 px-8 bg-black border-b-2 border-red"
      />
      </div>
      <div>
      <button type="submit" className="rounded-md w-full py-2 px-8 mt-2 bg-orange">Create User</button>
      </div>  
      </form>
  );
}

