import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoForm} from './todo_form';
import {TodoList} from './todo_list';

@Component({
    selector: 'todo-app',
    template: `
        <h2>Todo</h2>
        <span [hidden]="todos.length == 0">Complete {{remaining}}/{{todos.length}}</span>
        <todo-form (addTodoEvent)="addTask($event)"></todo-form>
        <todo-list [todos]="todos"></todo-list>
    `,
    directives: [TodoForm, TodoList]
})

export class TodoApp {
    todos: Todo[] = [];

    addTask(task: Todo) {
        this.todos.push(task);
    }

    get remaining() {
        return this.todos.reduce((count: number, todo: Todo) => todo.done ? count + 1 : count, 0);
    }
}