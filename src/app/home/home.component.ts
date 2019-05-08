import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';
  constructor( private router:ActivatedRoute) { }

  ngOnInit() {

    this.username = this.router.snapshot.params['username'];
  }

}
