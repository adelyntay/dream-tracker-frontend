import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
 
  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("token", responseData.access_token);
        navigate("/wall")
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input
          {...register("email", {
            required: true})}
          placeholder="Email"
        />    
        {errors.email && <p>Email is required</p>}
      </label>

      <label>
      Password:
      <input
          {...register("password", {
            required: true})}
          placeholder="Password"
        />
        {errors.email && <p>Password is required</p>}
    </label>

      <button type="submit">Login</button>
    </form>
  );
}

