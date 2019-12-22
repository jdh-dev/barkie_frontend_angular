import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarkieFooterComponent } from './barkie-footer/barkie-footer.component';
import { WedstrijdListComponent } from './wedstrijd-list/wedstrijd-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BarkieFooterComponent,
    WedstrijdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
