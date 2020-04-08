import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoList } from 'src/app/models/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  /**
   * @lists contains the title of user created lists.
   */
  lists: Array<TodoList> = [];

  constructor() { }

  /**
   * @fetchAllLists sends requests to the backend to fetch user specific lists
   */
  fetchAllLists(): Observable<TodoList[]> {
    
    // for now, let's keep it simple

    const todoList1 = new TodoList(1, "Groceries", Date.now(), "", "");
    const todoList2 = new TodoList(2, "Movies", Date.now(), "", "");

    // const tempList = ['Groceries', 'Movies', 'Work', 'Gym', 'Study'];

    this.lists.push(todoList1);
    this.lists.push(todoList2);


    // this.lists = tempList;

    return of(this.lists);

  }

  fetchListById(id: number) {

    // let specifiedItem: TodoList;

    this.lists.forEach((item) => {
      if(item.id === id) {
        return item;
      }
    });

    return null;

  } 

}
