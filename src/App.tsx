import "./App.css";
import CreateUser from "./components/CreateUser";
import { ListOfUsers } from "./components/ListOfUsers";

function App(): JSX.Element {
  return (
    <>
      <ListOfUsers />
      <CreateUser />
    </>
  );
}

export default App;
