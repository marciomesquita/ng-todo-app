import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Array<Object> = [
    { id: 1, title: 'Lotem Ipsum', done: false},
    { id: 2, title: 'Lotem Ipsum', done: false },
    { id: 3, title: 'Lotem Ipsum', done: false },
    { id: 4, title: 'Lotem Ipsum', done: false },
    { id: 5, title: 'Lotem Ipsum', done: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
