/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

const routes: Routes = [
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
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
//import { ListingComponent } from './components/listing/listing.component';
//import { SearchComponent } from './components/search/search.component';
//import { ReviewApplicantsComponent } from './components/review-applicants/review-applicants.component';
//import { ViewPastApplicationsComponent } from './components/view-past-applications/view-past-applications.component';
//import { ViewPastListingsComponent } from './components/view-past-listings/view-past-listings.component';
//import { NewListingComponent } from './components/new-listing/new-listing.component';

/**
 * Registration of our routes
 * when the URL context is /pizzas then the router-outlet will render PizzaComponent
 */

const routes: Routes = [

{ path: '', component: LoginComponent},
//{ path: 'newlisting', component: NewListingComponent},
//{ path: 'search', component: SearchComponent},
//{ path: 'reviewApp', component: ReviewApplicantsComponent},
//{ path: 'pastApp', component: ViewPastApplicationsComponent},
//{ path: 'pastListing', component: ViewPastListingsComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
