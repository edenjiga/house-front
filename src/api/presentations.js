import axios from "axios";
const instance = axios.create({
  baseURL: "https://mysterious-island-25771.herokuapp.com/",
  timeout: 1000,
});

const getAllPresentations = async () => {
  const { data } = await instance.get("/presentations");
  return data;
};

const postPresentations = async (body) => {
  const { data } = await instance.post("/presentations", body);
  return data;
};

const addAttendeesToPresentation = async (presentationId, email) => {
  const { data } = await instance.post(
    `/presentations/${presentationId}/attendees`,
    { email }
  );
  return data;
};

export { getAllPresentations, postPresentations, addAttendeesToPresentation };
