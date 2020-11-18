import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Todos } from '../Models/Todos';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService { 

  todosUrl:string = "https://jsonplaceholder.typicode.com/todos";
  limit:string = "?_limit=5"

  constructor(private http: HttpClient) { }

  //Service for getting the todos
  getTodos(): Observable<any>{
    return this.http.get<any>(`${this.todosUrl}${this.limit}`)
  }

  //Service for updating the todos
  updateTodos(todo: Todos): Observable<any>{
    let todoId = todo.id + "";
    todoId = todoId.length > 3 ? todoId.slice(0,3) : todoId;  
    let url = `${this.todosUrl}/${+todoId}`;
    return this.http.put<any>(url, todo, httpOptions);
  }

  //Service for deleting the todos
  deleteTodos(todo: Todos): Observable<any>{
    let url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<any>(url, httpOptions);
  }

  //Service for adding the todos
  addTodos(todo: Todos): Observable<any>{
    let url = `${this.todosUrl}`;
    return this.http.post<any>(url, todo, httpOptions);
  }

}
