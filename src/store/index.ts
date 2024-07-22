import { defineStore } from "pinia";
import { SampleService } from "../service";
import { TodoList } from "../types";

const sampleService = new SampleService();

export const useSampleStore = defineStore("sampleStore", {
  state: () => ({
    todoList: [],
  }),
  actions: {
    async getTodoList(): Promise<TodoList> {
      const response = await sampleService.getTodoList();
      // 1. 상태관리가 필요한 데이터는 state에 정의 해둔 값을 업데이트
      // console.log(response);
      // this.todoList = response.data

      // 2. 상태관리가 필요 없다면 조회된 결과 return
      return response.data;
    },
  },
});
