import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule}  from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = []; // sets up routes constant where you define your routes

// configures NgModule imports
@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    ViewAccountComponent,
    UpdateAccountComponent,
    ListAccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
