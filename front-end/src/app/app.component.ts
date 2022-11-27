import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Todo } from './todo';
import { TodoService} from './todo.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  todos: Todo[] = []
  form: FormGroup = new FormGroup({
    description : new FormControl('')
  })

  constructor(
    private service: TodoService
  ){}

  ngOnInit() {
      this.listarTodos();
  }

  submit(){
    const todo: Todo = { ...this.form.value }
    this.service.salvar(todo).subscribe(savedTodo => {
      this.todos.push(savedTodo)
      this.form.reset()
    })
  }

  listarTodos(){
    this.service.listar().subscribe(todoList => this.todos = todoList)
  }

  delete(todo: Todo){
    this.service.deletar(todo.id).subscribe({
      next: (response) => this.listarTodos()
    })
  }

}
