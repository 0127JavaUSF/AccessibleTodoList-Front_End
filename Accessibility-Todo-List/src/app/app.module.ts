import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    MainLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
