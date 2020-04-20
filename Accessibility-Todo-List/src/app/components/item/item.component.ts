import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list-service/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListItem } from 'src/app/models/todo-list-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // TODO: Is this redundant? We already have item info in the previous list item component. #Refactor #TODO

  currentItem: TodoListItem;

  constructor(private _listService: TodoListService,
              private _activeRoute: ActivatedRoute,
              private _router: Router,
    ) { }

  ngOnInit() {
    if (this._listService.lists.length === 0) {
      // the lists are not fetch. User probably refreshed the page while being at todo-list/:listId
      this._listService.fetchAllLists().subscribe(
        (data) => {
          this.fetchCurrentItem();
        },
        (error) => console.error(error)
      );
    } else {
      // the lists are fetched. So we can simply look for specific list item
      // fetch List object based on ID from URL path
      this.fetchCurrentItem();
    }
  }

  fetchCurrentItem() {

    const listId = parseInt(this._activeRoute.snapshot.params.listId);
    const itemId = parseInt(this._activeRoute.snapshot.params.itemId);

    this.currentItem = this._listService.fetchItemById(listId, itemId);

    if (this.currentItem === null) {
      console.error('The item with such id cannot be found.');
    }

  }

  handleGoBack() {
    const listId = this._activeRoute.snapshot.params.listId;
    this._router.navigate([`/todo-list/${listId}`]);
  }

}
