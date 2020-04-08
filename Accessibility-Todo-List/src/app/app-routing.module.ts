import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {path: "todo-list", component: TodoListComponent},
  {path: "todo-list/:listId", component: TodoListItemComponent},
  {path: "todo-list/:listId/item/:itemId", component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
