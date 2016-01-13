# angular2-todo

The purpose of this project is just for studying Angular 2 and TypeScript as well.

## Instruction

To run the project, you need to use **Node.js** and **NPM**

Then run these command:
```sh
npm install
npm start
```
> You can find more information in `package.json` file

## Components in the example

I created 3 component and I call them: **todo-form**, **todo-list**, **todo-app**
I will show you the hierarchy:
* todo-app
    * todo-form
        * text input
        * submit button
    * todo-list
        * task list
        * "done" check box

When you write some content for the task and click on the `add` button on the screen, the data will be triggered in the `todo-form` and todo-app will receivce the `Todo` object and `addTask` function (belong to **todo-app**) will be called inside the `todo-form` component. The **todos** array will be updated and `todo-list` will receive the new data because the **todos** object in the `todo-list` has been injected with the one of `todo-app`