import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODO List';
  app_var = 'Welcome to my Website';
  viraj_var="TCS Employee";
  constructor(){
    // setTimeout(() =>{
    //   this.title = "Task List";
    // }, 2000);
  }
}
