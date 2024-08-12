import { Button, Card, TextInput, Title } from "@tremor/react";
import useActionsUsers from "../hooks/useActionsUsers";
import type { CleanUser, Email } from "../types/types";

function CreateUser(): JSX.Element {
  const { addingUser } = useActionsUsers();

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const user: CleanUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as Email,
      github: formData.get("github") as string,
    };

    if (!user.name || !user.email || !user.github) {
      alert("You must fill all the fields");
      return;
    }

    addingUser(user);
    form.reset();
  };

  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <Title>Create new User</Title>
      <form onSubmit={handlerSubmit}>
        <TextInput name="name" placeholder="Tu nombre" />
        <TextInput name="email" placeholder="Tu email" />
        <TextInput name="github" placeholder="Tu GitHub User" />
        <div>
          <Button type="submit" style={{ marginTop: "1rem" }}>
            Crear usuario
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default CreateUser;
