import { Component, OnInit } from '@angular/core';
import { CreateItemObj } from 'src/app/models/create-item-obj';
import { TodoListService } from 'src/app/services/todo-list-service/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  itemName: string = '';
  itemDue = 0;
  itemNote: string = '';
  itemFile: string = '';

  constructor(private _listService: TodoListService,
              private _router: Router,
              private _activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
  }

  handleCreateItem() {

    // tslint:disable-next-line: radix
    const listId = parseInt(this._activeRoute.snapshot.params.listId);
    const newItem = new CreateItemObj(this.itemName, this.itemDue, this.itemNote, this.itemFile);


    this._listService.createItem(listId, newItem);

    this.handleGoBack();

  }

  handleGoBack() {

    const listId = this._activeRoute.snapshot.params.listId;
    this._router.navigate([`/todo-list/${listId}`]);

  }

}
