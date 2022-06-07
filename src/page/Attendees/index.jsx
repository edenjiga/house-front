/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllAttendees, postAttendees } from "../../api/attendees";
import Form from "./components/Form";

export default () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    "attendees",
    getAllAttendees
  );

  const mutation = useMutation(postAttendees, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("attendees");
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onSubmit = (body) => {
    mutation.mutate(body);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />

      <ul>
        {data.map((attendee) => (
          <li key={attendee._id}>
            name: {attendee.name} / email: {attendee.email} / company:
            {attendee.company}
          </li>
        ))}
      </ul>
    </div>
  );
};
