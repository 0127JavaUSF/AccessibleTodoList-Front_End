import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/todo-list-item';
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

  currentList: TodoListItem;

  constructor(private _activeRoute: ActivatedRoute,
              private _router: Router,
              private _listService: TodoListService,
    ) { }

  ngOnInit() {

    if (this._listService.lists.length === 0) {
      // the lists are not fetch. User probably refreshed the page while being at todo-list/:listId
      this._listService.fetchAllLists().subscribe(
        (data) => {
          this.fetchCurrentList();
        },
        (error) => console.error(error)
      );
    } else {
      // the lists are fetched. So we can simply look for specific list item
      // fetch List object based on ID from URL path
      this.fetchCurrentList();
    }

  }

  fetchCurrentList() {
    this.currentList = this._listService.fetchListById(parseInt(this._activeRoute.snapshot.params.listId));

    if (this.currentList === null) {
      console.error('The list with such id cannot be found.');
    }
  }

  handleCreateTodo() {
    const listId = this._activeRoute.snapshot.params.listId;
    this._router.navigate([`/todo-list/${listId}/create-item`]);
  }

  handleGoBack() {
    this._router.navigateByUrl('todo-list');
  }

  navigateToItem(item: TodoListItem) {
    const listId = this._activeRoute.snapshot.params.listId;
    this._router.navigate([`/todo-list/${listId}/item/${item.id}`]);
  }

}
