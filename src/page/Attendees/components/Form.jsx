/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useForm } from "react-hook-form";

export default ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="name" />
      <input {...register("email", { required: true })} placeholder="email" />
      <input
        {...register("company", { required: true })}
        placeholder="Company"
      />
      <input type="submit" />
    </form>
  );
};
