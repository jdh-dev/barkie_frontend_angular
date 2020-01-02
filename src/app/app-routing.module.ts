import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WedstrijdListComponent } from './wedstrijd-list/wedstrijd-list.component';
import { AanvraagComponent } from './aanvraag/aanvraag.component';
const routes: Routes = [
  {
    path: '',
    component: WedstrijdListComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'aanvraag',
    component: AanvraagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
