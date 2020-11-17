import { Component, OnDestroy, OnInit } from '@angular/core';
import {Todos} from '../../Models/Todos';
import {TodoServicesService} from '../../Services/todo-services.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'todo-container',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos:Todos[]=[]; 
  isComponentAlive: boolean = true;

  constructor(public todoService:TodoServicesService) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
    this.todoService.getTodos()
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(todo => this.todos = todo);
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

  onDelete(todo:Todos){
    this.todos = this.todos.filter(item => item.id !== todo.id);
    this.todoService.deleteTodos(todo).subscribe(todo => {
      //Does nothing ....
    })
  }

  onAddTodo(todo:Todos){
    console.log("here!")
    this.todoService.addTodos(todo).subscribe(data => {
      // Does nothing....
    });
    this.todos = [...this.todos, todo];
  }

}
