import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})

export class ListAccountsComponent implements OnInit {
  accounts: Account[] = []
  // angular material table called MatTableDataSource
  displayedColumns: string[] = ['index', 'first_name', 'last_name', 'action'];
  dataSource = new MatTableDataSource<Account>(this.accounts);

  constructor(private accountService: AccountService) { }

  // it is called after Angular has initialized all data-bound properties
  ngOnInit(): void {
    this.retrieveAccounts();
  }

  // function to get all accounts in the backend
  retrieveAccounts(): void {
    this.accountService.getAll()
      // it will run whenever any change is made in the observable
      .subscribe( {
        next: data => {
          this.accounts = data;
          this.dataSource = new MatTableDataSource<Account>(this.accounts);
        },
        error: err => console.log(err)
      });
  }
}
