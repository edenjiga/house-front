/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useForm } from "react-hook-form";
import { addAttendeesToPresentation } from "../../api/presentations";

export default () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ presentationId, email }) =>
    addAttendeesToPresentation(presentationId, email);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("presentationId", { required: true })}
        placeholder="presentationId"
      />
      <input {...register("email", { required: true })} placeholder="email" />
      <input type="submit" />
    </form>
  );
};
