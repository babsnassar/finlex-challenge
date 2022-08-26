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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
