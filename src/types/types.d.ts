export type Email = `${string}@${string}.${string}`;

export type UserId = string;
export interface User {
  name: string;
  email: Email;
  github: string;
  id: UserId;
}

export type ActionsUsers = {
  deleteUser: (id: UserId) => void;
};
