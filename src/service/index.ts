import { reqGET } from "../shared/apis/api-client";

export class SampleService {
  getTodoList() {
    return reqGET("/todos");
  }
}
