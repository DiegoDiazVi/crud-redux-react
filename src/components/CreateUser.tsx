import { Button, Card, TextInput, Title } from "@tremor/react";

function CreateUser(): JSX.Element {
  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <Title>Create new User</Title>
      <form>
        <TextInput placeholder="Tu nombre" />
        <TextInput placeholder="Tu email" />
        <TextInput placeholder="Tu GitHub User" />
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
