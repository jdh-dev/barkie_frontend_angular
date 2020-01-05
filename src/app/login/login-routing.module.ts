import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthGaurdService } from '../auth//auth-gaurd.service';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  } ,
  { 
    path: 'register', 
    component: RegisterComponent 
  } ,
  { 
    path: 'logout', 
    component: LogoutComponent, canActivate:[AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRouterModule {
}
