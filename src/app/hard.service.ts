import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardService {

  constructor() { }

  auth(username,password){
console.log('before '+this.isLogged());
    if(username === "Dulshan" && password === "zaqwsx"){
      sessionStorage.setItem('user',username);
      console.log('after '+this.isLogged());
      return true;
    }
    return false;
  }

  isLogged() {
   
    let user = sessionStorage.getItem('user');
    return !(user === null)
  }

  logout() {

    sessionStorage.removeItem('user');
  }
}

