import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Models/Todos';
import { TodoServicesService } from '../../Services/todo-services.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo:EventEmitter<Todos> = new EventEmitter();
  completed:boolean = false;
  title:string = '';
  todos: any = {};

  constructor(public todoService:TodoServicesService) { };

  ngOnInit(): void {
  };

  submitHandler(form: any) {
    this.todos= {
      id: new Date().getTime(),
      title: form.value.title,
      completed: this.completed,
    }
    this.addTodo.emit(this.todos);
    form.resetForm();
  };

}
