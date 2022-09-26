import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponenets/todos/todos.component';
import { TodoItemComponent } from './MyComponenets/todo-item/todo-item.component';
import { AddTodosComponent } from './MyComponenets/add-todos/add-todos.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './MyComponenets/about/about.component';
import { HomeComponent } from './MyComponenets/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodosComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
