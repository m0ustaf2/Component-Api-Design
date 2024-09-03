import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import "./App.css";
import TextField, { PasswordInput } from "./Components/Inputs";

function App() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <form
        className="bg-slate-100 p-8 rounded-lg flex flex-col gap-4 min-w-96"
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
      <TextField label="New item" error={undefined} />
        <TextField
          {...register("email", { required: "this field is required" })}
          label="Email"
          type="email"
          startIcon={<Mail />}
          error={errors.email && String(errors.email?.message)}
        />
        <PasswordInput
          label="Confirm Password"
          {...register("ConfirmPassword", {  
            required: "this field is required",
            minLength: {
              value: 8,
              message: "Confirm Password must not be less than 8 characters",
            },
            maxLength: {
              value: 12,
              message: "Confirm Password must not be more than 12 characters",
            },
          })}
          error={
            errors.ConfirmPassword && String(errors.ConfirmPassword?.message)
          }
        />

        <PasswordInput
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password must not be less than 8 characters",
            },
            maxLength: {
              value: 12,
              message: "password must not be more than 12 characters",
            },
          })}
          label="Password"
          error={errors.password && String(errors.password?.message)}
        />

        <button
          type="submit"
          className="bg-blue-400 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
      
    </div>
  );
}

export default App;
