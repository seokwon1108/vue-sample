import { reqGET, reqPOST } from "../shared/apis/api-client";
import { TodoItem } from "../types";

export class SampleService {
  getTodoList() {
    return reqGET("/todos");
  }

  createTodo(todo: Omit<TodoItem, "id">) {
    return reqPOST("/todos", todo);
  }
}
