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
  displayedColumns: string[] = ['index', 'first_name', 'last_name', 'action'];
  dataSource = new MatTableDataSource<Account>(this.accounts);

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.retrieveAccounts();
  }

  retrieveAccounts(): void {
    this.accountService.getAll()
      .subscribe( {
        next: data => {
          this.accounts = data;
          this.dataSource = new MatTableDataSource<Account>(this.accounts);
        },
        error: err => console.log(err)
      });
  }
}
