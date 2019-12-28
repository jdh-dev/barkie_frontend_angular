import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WedstrijdListComponent } from './wedstrijd-list/wedstrijd-list.component';
import { BarkieFooterComponent } from './barkie-footer/barkie-footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WedstrijdListRouterModule } from './wedstrijd-list/wedstrijd-list-routing.module'
import { CommonModule } from '@angular/common';
import {LoginRouterModule } from './login/login-routing.module';
import { HeaderModule } from './header/header.module'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BarkieFooterComponent,
    LoginComponent,
    HeaderComponent,
    WedstrijdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WedstrijdListRouterModule,
    HttpClientModule,
    CommonModule,
    LoginRouterModule,
    HeaderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }