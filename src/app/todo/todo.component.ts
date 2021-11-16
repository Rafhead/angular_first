import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks.push("Wake up at 6 a.m.");
    this.tasks.push("Going to bed at 11 p.m.");
  }

}
