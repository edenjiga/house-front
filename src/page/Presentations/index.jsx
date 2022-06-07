/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import {
  getAllPresentations,
  postPresentations,
} from "../../api/presentations";
import Form from "./components/Form";

export default () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    "presentations",
    getAllPresentations
  );

  const mutation = useMutation(postPresentations, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("presentations");
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onSubmit = (body) => {
    const speaker = {
      name: body.name,
      company: body.company,
      email: body.email,
      bio: body.bio,
    };

    mutation.mutate({ ...body, speaker });
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />

      <ul>
        {data.map((presentation) => (
          <li>
            <Link
              to={`/Presentation/${presentation._id}`}
              key={presentation._id}
            >
              presentation: {presentation.presentation}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
