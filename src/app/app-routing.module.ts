import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WedstrijdListComponent } from './wedstrijd-list/wedstrijd-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: WedstrijdListComponent,
    pathMatch: 'full'
  } ,
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
