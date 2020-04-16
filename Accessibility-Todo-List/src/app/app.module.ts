import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

<<<<<<< HEAD
import { HttpClientModule,HttpClient } from '@angular/common/http';
=======
>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderPanelComponent,
    MainLandingComponent,
=======

    HeaderPanelComponent,
    MainLandingComponent

>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03
    LoginComponent,
    RegistrationComponent,
    TodoListComponent,
    TodoListItemComponent,
    ItemComponent,
    CreateListComponent,
    CreateItemComponent
<<<<<<< HEAD
=======


>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,

  ],
  providers: [HttpClient],
=======

  ],
  providers: [],
>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03
  bootstrap: [AppComponent]
})
export class AppModule { }
