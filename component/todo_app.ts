import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoForm} from './todo_form';
import {TodoList} from './todo_list';

@Component({
    selector: 'todo-app',
    template: `
        <h2>Todo List</h2>
        <div [hidden]="todos.length == 0">
            <label>Complete {{remaining}}/{{todos.length}}</label>
             • <a href="javascript: false" (click)="clearAll($event)">Clear all</a>
             • <a href="javascript: false" (click)="archive($event)">Archive</a>
        </div>
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

    clearAll(event) {
        event.preventDefault();

        this.todos = [];
    }

    archive(event) {
        event.preventDefault();

        this.todos = this.todos.filter((todo: Todo) => !todo.done);
    }
}