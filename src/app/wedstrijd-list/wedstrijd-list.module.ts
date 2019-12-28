import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WedstrijdListRouterModule } from './wedstrijd-list-routing.module';
import { WedstrijdListComponent } from './wedstrijd-list.component';

@NgModule({
  imports: [
    CommonModule,
    WedstrijdListRouterModule
  ],
  declarations: [WedstrijdListComponent]
})

export class WedstrijdListModule { }

