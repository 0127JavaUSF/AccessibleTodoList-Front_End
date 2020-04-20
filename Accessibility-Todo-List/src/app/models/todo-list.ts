import { TodoListItem } from './todo-list-item';

export class TodoList {
    id: number;
    title: String;
    items: Array<TodoListItem>;

    constructor(id: number, title: String, items: Array<TodoListItem>) {
        this.id = id;
        this.title = title;
        this.items = items;
    }
}
