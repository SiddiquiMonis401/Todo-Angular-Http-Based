import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemsComponent } from './component/todo-items/todo-items.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
