import axios from "axios";
const instance = axios.create({
  baseURL: "https://mysterious-island-25771.herokuapp.com/",
  timeout: 1000,
});

const getAllAttendees = async () => {
  const { data } = await instance.get("/attendees");
  return data;
};

const postAttendees = async (body) => {
  console.log(body);
  const { data } = await instance.post("/attendees", body);
  return data;
};

export { getAllAttendees, postAttendees };
