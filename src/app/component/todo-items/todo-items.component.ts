import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Models/Todos';
import { TodoServicesService } from '../../Services/todo-services.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 
  @Input() todo:Todos = {id:0, title: '', completed:false};
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();

  constructor(private todosService: TodoServicesService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }
    return classes;
  }

  onToggle(todo: Todos){
    // Updating the UI
    this.todo.completed = !todo.completed;
    //Updating the data at the server
    this.todosService.updateTodos(todo).subscribe(updatedTodo =>{
      console.log(updatedTodo);
    } ) 
  }
  
  onDel(todo: Todos){
    this.deleteTodo.emit(todo);
  }

}
