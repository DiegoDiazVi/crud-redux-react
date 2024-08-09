import {
  Card,
  Table,
  TableBody,
  TableCell,
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
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="">{item.id}</TableCell>
              <TableCell style={{ display: "flex" }}>
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                  src={`https://unavatar.io/github/${item.github}`}
                  alt="Avatar"
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
