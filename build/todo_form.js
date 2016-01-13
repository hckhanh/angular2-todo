System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoForm = (function () {
                function TodoForm() {
                    this.addTodoEvent = new core_1.EventEmitter();
                }
                TodoForm.prototype.addTodo = function () {
                    if (this.task) {
                        this.addTodoEvent.next({ text: this.task, done: false });
                        this.task = '';
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoForm.prototype, "addTodoEvent", void 0);
                TodoForm = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        templateUrl: 'template/todo_form.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoForm);
                return TodoForm;
            })();
            exports_1("TodoForm", TodoForm);
        }
    }
});
//# sourceMappingURL=todo_form.js.map