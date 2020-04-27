import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../../components/delete-item-dialog/delete-item-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  searchText: string;
  todos: Array<Object> = [
    { id: 1, title: 'Lotem Ipsum 1', done: false},
    { id: 2, title: 'Lotem Ipsum 2', done: false },
    { id: 3, title: 'Learn Angular', done: false },
    { id: 4, title: 'Lotem Ipsum 4', done: false },
    { id: 5, title: 'Lotem Ipsum 5', done: true }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onToggleTodo(todoSelected) {
    const index = this.todos.findIndex(todo => todo === todoSelected);
    this.todos[index]['done'] = !todoSelected.done;
  }

  deleteTodo(todo) {
    this.dialog.open(DialogOverviewExampleDialog)
    // this.todos.splice(this.todos.indexOf(todo), 1);
  }

  onSubmit() {
    if (!this.title) {
      return;
    }

    const newTodo = {
      title: this.title,
      done: false
    }
    this.todos = [...this.todos, newTodo]
    this.title = '';
  }
}

