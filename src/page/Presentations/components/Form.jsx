/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useForm } from "react-hook-form";

export default ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("presentation", { required: true })}
        placeholder="presentation"
      />
      <input
        {...register("details", { required: true })}
        placeholder="details"
      />
      <input {...register("room", { required: true })} placeholder="room" />

      <p>Speaker info</p>

      <input {...register("name", { required: true })} placeholder="name" />
      <input
        {...register("company", { required: true })}
        placeholder="company"
      />
      <input {...register("email", { required: true })} placeholder="email" />
      <input {...register("bio", { required: true })} placeholder="bio" />

      <input type="submit" />
    </form>
  );
};
