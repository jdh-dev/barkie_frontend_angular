import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WedstrijdListComponent } from '../wedstrijd-list/wedstrijd-list.component';
import { WedstrijdComponent } from '../wedstrijd/wedstrijd.component';

const routes: Routes = [
  { 
    path: 'wedstrijd', 
    children: [
      { path: '', component: WedstrijdListComponent },
      { path: ':id', component: WedstrijdComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WedstrijdListRouterModule {
}
