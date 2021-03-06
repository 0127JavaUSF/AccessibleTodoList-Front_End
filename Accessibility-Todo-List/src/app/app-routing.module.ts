import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';




// these are routes (constants)

const routes: Routes = [


  {path: "todo-list", component: TodoListComponent},
  {path: "todo-list/create-list", component: CreateListComponent},
  {path: "todo-list/:listId", component: TodoListItemComponent},
  {path: "todo-list/:listId/item/:itemId", component: ItemComponent},
  {path: "todo-list/:listId/create-item", component: CreateItemComponent},
  {path: "", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "main-landing", component: MainLandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
