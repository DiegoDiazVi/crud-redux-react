import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import type { User } from "../types/types";

export function ListOfUsers(): JSX.Element {
  const users: User[] = [
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

  return (
    <Card>
      <TableFoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>GitHub</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="">{item.id}</TableCell>
                <TableCell className="">
                  <img
                    src={`https://unavatar.io/github/${item.github}`}
                    alt="Avatar"
                  />
                  {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.github}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableFoot>
    </Card>
  );
}
