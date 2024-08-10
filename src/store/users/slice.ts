import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const initialState: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "dadad@dada.com",
    github: "midudev",
  },
  {
    id: "2",
    name: "John Doe",
    email: "dadad@dada.com",
    github: "react",
  },
  {
    id: "3",
    name: "John Doe",
    email: "dadad@dada.com",
    github: "goncy",
  },
  {
    id: "4",
    name: "John Doe",
    email: "dadad@dada.com",
    github: "tailwindcss",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
