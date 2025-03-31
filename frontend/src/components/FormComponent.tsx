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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => api.post("/register", data),
    onSuccess: () => {
      toast.success("User registered successfully!");
      reset();
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "Internal server error";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: FormData) => mutation.mutate(data);

  return (
    <div className="w-3/12 flex flex-col items-center justify-center gap-4">
      <h1 className="font-semibold text-2xl">Welcome back!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 w-full rounded-lg flex flex-col items-center gap-8 justify-center"
      >
        <div className="flex flex-col gap-4 w-full">
          <input
            {...register("email")}
            placeholder="UID"
            className="w-full border border-gray-300 rounded-md p-2 placeholder:text-sm"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-2 placeholder:text-sm"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          className="bg-[#2b3a67] text-white w-full p-3 mt-3 rounded-sm cursor-pointer"
          type="submit"
          disabled={mutation.status === "pending"}
        >
          {mutation.status === "pending" ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
