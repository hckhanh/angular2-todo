import {Component, Input} from 'angular2/core';
import {Todo} from './todo.js';

@Component({
    selector: 'todo-list',
    styles: [`
        .done-true {
            text-decoration: line-through;
            color: grey;
        }
    `],
    templateUrl: 'template/todo_list.html'
})

export class TodoList {
    @Input() todos: Todo[];
}