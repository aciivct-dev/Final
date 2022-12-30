  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HttpClientModule } from '@angular/common/http';//default
  import { FormsModule } from '@angular/forms';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { AddProComponent } from './add-pro/add-pro.component';
  import { ListProComponent } from './list-pro/list-pro.component';
  import { EditProComponent } from './edit-pro/edit-pro.component';

  @NgModule({
    declarations: [
      AppComponent,
      AddProComponent,
      ListProComponent,
      EditProComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
