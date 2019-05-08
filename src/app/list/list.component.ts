import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id:number,
    public des:string,
    public done:boolean,
    public date:Date
)
{


}

  
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos = [

    new Todo(1, 'Learn Spring', true, new Date()),
    new Todo(2, 'Learn Java Script', true, new Date()),
    new Todo(3, 'Learn Angular', false, new Date()),
    new Todo(4, 'Learn Angular Material', false, new Date()),
    new Todo(5, 'Learn Angular with Spring', false, new Date()),
    new Todo(5, 'Learn Micro Services', false, new Date()),
  ];


  constructor() { }

  ngOnInit() {
  }

}
