import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list-service/todo-list.service';
import { Router } from '@angular/router';
import { TodoList } from 'src/app/models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  lists: Array<TodoList> = [];

  constructor(private _listService: TodoListService, 
    private _router: Router) { }

  ngOnInit() {
    this._listService.fetchAllLists().subscribe(
      (resultList) => this.lists = resultList,
      (error) => console.error(error)
    )
  }

  navigateToItem(item: TodoList) {
    console.log(item.id);
    this._router.navigate([`/todo-list/${item.id}`]);
    // this._router.navigateByUrl(`/todo-list/${item.id}`);
  }

}
