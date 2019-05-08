import { Component, OnInit } from '@angular/core';
import { HardService } from '../hard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hard:HardService) { }

  ngOnInit() {

    this.hard.logout();
  }

}
