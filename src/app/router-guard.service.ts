import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { HardService } from './hard.service';
import { Router }  from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hard.isLogged()){

    return true;
  }

  this.router.navigate(['login']);
  return false;
  }



  constructor(private hard:HardService, private router:Router ) { }
}
