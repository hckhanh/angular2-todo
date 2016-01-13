System.register(['angular2/core', './todo_form.js', './todo_list.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_form_js_1, todo_list_js_1;
    var TodoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_form_js_1_1) {
                todo_form_js_1 = todo_form_js_1_1;
            },
            function (todo_list_js_1_1) {
                todo_list_js_1 = todo_list_js_1_1;
            }],
        execute: function() {
            TodoApp = (function () {
                function TodoApp() {
                    this.todos = [];
                }
                TodoApp.prototype.addTask = function (task) {
                    this.todos.push(task);
                };
                Object.defineProperty(TodoApp.prototype, "remaining", {
                    get: function () {
                        return this.todos.reduce(function (count, todo) { return todo.done ? count + 1 : count; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        template: "\n        <h2>Todo</h2>\n        <span [hidden]=\"todos.length == 0\">Complete {{remaining}}/{{todos.length}}</span>\n        <todo-form (addTodoEvent)=\"addTask($event)\"></todo-form>\n        <todo-list [todos]=\"todos\"></todo-list>\n    ",
                        directives: [todo_form_js_1.TodoForm, todo_list_js_1.TodoList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoApp);
                return TodoApp;
            })();
            exports_1("TodoApp", TodoApp);
        }
    }
});
//# sourceMappingURL=todo_app.js.map