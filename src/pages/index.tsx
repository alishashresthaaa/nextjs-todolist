import TodoForm from "@/components/todoForm.component";
import TodoListComponent from "@/components/todoList.component";
import { store } from "@/state/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoListComponent />
    </Provider>
  );
}
