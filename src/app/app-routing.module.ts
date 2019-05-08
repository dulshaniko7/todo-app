import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './router-guard.service';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'home/:username',component:HomeComponent,canActivate:[RouterGuardService]},
  {path: 'todos',component:ListComponent,canActivate:[RouterGuardService]},
  {path: 'logout',component:LogoutComponent,canActivate:[RouterGuardService]},
  {path: '**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
