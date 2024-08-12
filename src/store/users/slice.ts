import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserId } from "../../types/types";

const DEFAULT_STATE = [
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

const initialState: User[] = (() => {
  const persistedState = localStorage.getItem("redux_state");
  if (persistedState) return JSON.parse(persistedState).user;
  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserByID: (state, action: PayloadAction<UserId>) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default userSlice.reducer;
export const { deleteUserByID } = userSlice.actions;
