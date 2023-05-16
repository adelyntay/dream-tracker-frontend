import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
 
  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backendUrl}/users/login`, {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-[35rem]">
        <div>
        <input
          {...register("email", {
            required: true})}
          placeholder="Email"
          className="my-4 w-full rounded-sm py-2 px-8 bg-black border-b-2 border-red"
        />    
        {errors.email && <p>Email is required</p>}
        </div>  

        <div>
      <input
          {...register("password", {
            required: true})}
          type="password"
          placeholder="Password"
          className="my-4 w-full rounded-sm py-2 px-8 bg-black border-b-2 border-red"
        />
        {errors.password && <p>Password is required</p>}
        </div>

        <div>
      <button type="submit" className="rounded-md w-full py-2 px-8 mt-2 bg-orange">Login</button>
      </div>
    </form>
  );
}

