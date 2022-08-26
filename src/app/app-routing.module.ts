import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: ListAccountsComponent },
  { path: 'account/create', component: AddAccountComponent },
  { path: 'accounts/:id', component: ViewAccountComponent },
  { path: 'accounts/:id/update', component: UpdateAccountComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
