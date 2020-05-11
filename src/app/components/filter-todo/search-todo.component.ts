import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.scss']
})
export class SearchTodoComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();
  searchText = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.searchText.valueChanges.subscribe((value) => {
      this.searched.emit(value)
    });
  }
}
