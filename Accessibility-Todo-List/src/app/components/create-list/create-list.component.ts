import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list-service/todo-list.service';
import { CreateListObj } from 'src/app/models/create-list-obj';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  listName: String = "";

  constructor(private _listService: TodoListService,
    private _router: Router,
    ) { }

  ngOnInit() {
  }

  handleCreateList() {
    
    const newList = new CreateListObj(this.listName);

    this._listService.createList(newList);

    this.handleGoBack();

  }

  handleGoBack() {
    this._router.navigate([`/todo-list`]);
  }

}
