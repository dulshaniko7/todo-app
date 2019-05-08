import { Component, OnInit } from '@angular/core';
import { HardService } from '../hard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;


  constructor(private hard:HardService) { }

  ngOnInit() {

   
  }

}
