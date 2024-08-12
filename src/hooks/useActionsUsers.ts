import { addUser, deleteUserByID } from "../store/users/slice";
import { ActionsUsers, CleanUser, UserId } from "../types/types";
import { useAppDispatch } from "./store";

function useActionsUsers(): ActionsUsers {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserByID(id));
  };

  const addingUser = ({ name, email, github }: CleanUser) => {
    dispatch(addUser({ name, email, github }));
  };

  return { deleteUser, addingUser };
}

export default useActionsUsers;
