import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardService } from '../hard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string ="";
  password:string = "";

  error:boolean = true;

  showMsg:string = '';
  
 
  constructor(private router: Router,private hardService:HardService ) { }


  ngOnInit() {
  }

  login() {

    if(this.hardService.auth(this.username,this.password)) {
      this.error = false;
      this.showMsg = "Allright";
      this.router.navigate(['home',this.username])
    }
    else {
      this.error = true;
      this.showMsg = "Sorry";
    }
    
  }

  


}
