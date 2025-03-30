import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import api from "../services/api";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof schema>;

const FormComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => api.post("/register", data),
    onSuccess: () => toast.success("User registered successfully!"),
    onError: () => toast.error("Registration failed. Try again."),
  });

  const onSubmit = (data: FormData) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 shadow-lg rounded-lg">
      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;