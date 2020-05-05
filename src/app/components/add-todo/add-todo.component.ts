import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string;
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted.emit(this.title);
    this.title = '';
  }

}
