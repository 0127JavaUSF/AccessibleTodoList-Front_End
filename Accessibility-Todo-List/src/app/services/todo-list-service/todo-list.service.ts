import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoListItem } from 'src/app/models/todo-list-item';
import { TodoList } from 'src/app/models/todo-list';
import { CreateItemObj } from 'src/app/models/create-item-obj';

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

    const todoListItem1 = new TodoListItem(1, 'Buy apple', Date.now(), 'I have to go to store', 'www.example.com/img1');
    const todoListItem2 = new TodoListItem(2, 'Watch Shawshank Redemption', Date.now(), 'Go to Netflix', 'www.example.com/img2');

    const todoList1 = new TodoList(1, 'Groceries', [todoListItem1]);
    const todoList2 = new TodoList(2, 'Movies', [todoListItem2]);

    // const tempList = ['Groceries', 'Movies', 'Work', 'Gym', 'Study'];

    this.lists = [todoList1, todoList2];

    // this.lists = tempList;

    return of(this.lists);

  }

  fetchListById(id: number): TodoListItem {

    // let specifiedItem: TodoList;

    let tempCurrentList = null;

    this.lists.forEach((list) => {
      if (list.id === id) {
        tempCurrentList = list;
      }
    });
    return tempCurrentList;

  }

  fetchItemById(listId: number, itemId: number): TodoListItem {

    let tempCurrentItem = null;

    this.lists.forEach((list) => {

      if (list.id === listId) {

        list.items.forEach((item) => {
          if (item.id === itemId) {
            tempCurrentItem = item;
          }

        });
      }
    });
    return tempCurrentItem;

  }

  createList(list) {
    // send this new list to the backend and fetch all lists and update the LISTS variable

    const newList = new TodoList(3, list.title, []);

    // for now it is a push. Later, we fetch all lists from Backend
    this.lists.push(newList);

  }

  createItem(listId: number, item: CreateItemObj) {
    // send this new list to the backend and fetch all lists and update the LISTS variable

    const newItem = new TodoListItem(1, item.title, item.due, item.note, item.file);

    // for now it is a push. Later, we fetch all lists from Backend

    this.lists.forEach((list) => {
      if (list.id === listId) {
        list.items.push(newItem);
      }
    });

  }

}
