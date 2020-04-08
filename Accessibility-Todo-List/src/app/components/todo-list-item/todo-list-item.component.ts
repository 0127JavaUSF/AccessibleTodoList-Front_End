import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from 'src/app/models/todo-list';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list-service/todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  /**
   * @currentList is a list object that is currently being displayed
   */
  @Input()
  currentList: TodoList;

  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _listService: TodoListService,
    ) { }

  ngOnInit() {

    // fetch List object based on ID from URL path
    this.currentList = this._listService.fetchListById(this._activeRoute.snapshot.params['id']);
    if(this.currentList === null) {
      console.error("The list with such id cannot be found.");
    }

  }

  handleGoBack() {
    this._router.navigateByUrl("todo-list");
  }

}
