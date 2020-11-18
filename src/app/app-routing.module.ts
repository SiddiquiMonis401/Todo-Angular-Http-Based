import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './component/todos/todos.component';
import {AboutAppComponent} from './component/about-app/about-app.component';

const routes: Routes = [
  {path: '', component:TodosComponent},
  {path: 'about-app/:id', component:AboutAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
