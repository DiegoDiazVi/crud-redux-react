import { deleteUserByID } from "../store/users/slice";
import { ActionsUsers, UserId } from "../types/types";
import { useAppDispatch } from "./store";

function useActionsUsers(): ActionsUsers {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserByID(id));
  };

  return { deleteUser };
}

export default useActionsUsers;
