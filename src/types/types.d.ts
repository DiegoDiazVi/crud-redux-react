export type Email = `${string}@${string}.${string}`;

export interface User {
  name: string;
  email: Email;
  github: string;
  id: string;
}
