import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})

export class ListAccountsComponent implements OnInit {
  accounts: Account[] = []
  displayedColumns: string[] = ['index', 'first_name', 'last_name', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  dataSource = new MatTableDataSource<Account>(this.accounts);

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.retrieveAccounts();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }
  retrieveAccounts(): void {
    this.accountService.getAll()
      .subscribe(
      //   {
      //     next: data => this.accounts = data,
      //     error: err => console.log(err)
      // });

        data => {
          this.accounts = data;
          console.log(this.accounts);
          this.dataSource = new MatTableDataSource<Account>(this.accounts);
        },
        error => {
          console.log(error);
        });
  }
}
