import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

/**
 * Registration of our routes
 * when the URL context is /pizzas then the router-outlet will render PizzaComponent
 */


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: "todo-list", component: TodoListComponent},
  {path: "todo-list/create-list", component: CreateListComponent},
  {path: "todo-list/:listId", component: TodoListItemComponent},
  {path: "todo-list/:listId/item/:itemId", component: ItemComponent},
  {path: "todo-list/:listId/create-item", component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




