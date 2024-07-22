export type TodoList = TodoItem[];
export type TableColumnList = TableColumn[];

export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TableColumn {
  key: string;
  label: string;
  minWidth: number;
}
