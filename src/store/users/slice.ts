import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CleanUser, User, UserId } from "../../types/types";

const DEFAULT_STATE = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "dadad@dada.com",
    github: "midudev",
  },
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "dadad@dada.com",
    github: "react",
  },
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "dadad@dada.com",
    github: "goncy",
  },
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "dadad@dada.com",
    github: "tailwindcss",
  },
];

/**
 * The initial state of the users slice.
 *
 * @type {User[]}
 */
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
    addUser: (state, action: PayloadAction<CleanUser>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
  },
});

export default userSlice.reducer;
export const { deleteUserByID, addUser } = userSlice.actions;
