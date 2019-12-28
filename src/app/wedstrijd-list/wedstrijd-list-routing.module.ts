import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WedstrijdListComponent } from '../wedstrijd-list/wedstrijd-list.component';

const routes: Routes = [
  { 
    path: 'wedstrijdList', 
    component: WedstrijdListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WedstrijdListRouterModule {
}
