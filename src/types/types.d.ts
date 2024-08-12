export type Email = `${string}@${string}.${string}`;

export type UserId = string;
export interface CleanUser {
  name: string;
  email: Email;
  github: string;
}
export interface User extends CleanUser {
  id: UserId;
}

export type ActionsUsers = {
  deleteUser: (id: UserId) => void;
  addingUser: (user: CleanUser) => void;
};
