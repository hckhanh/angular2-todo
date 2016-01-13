System.register(['angular2/platform/browser', './todo_app.js'], function(exports_1) {
    var browser_1, todo_app_js_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todo_app_js_1_1) {
                todo_app_js_1 = todo_app_js_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todo_app_js_1.TodoApp);
        }
    }
});
//# sourceMappingURL=boot.js.map