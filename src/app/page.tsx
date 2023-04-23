import { FormTask } from "./components/FormTask";
import { ListTask } from "./components/ListTask";

export default function Home() {

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <FormTask />
      <ListTask />
    </div>
  );
}
