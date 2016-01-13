import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo.js';

@Component({
    selector: 'todo-form',
    templateUrl: 'template/todo_form.html'
})

export class TodoForm {
    @Output() addTodoEvent = new EventEmitter<Todo>();

    addTodo(): void {
        if (this.task) {
            this.addTodoEvent.next({ text: this.task, done: false });
            this.task = '';
        }
    }
}