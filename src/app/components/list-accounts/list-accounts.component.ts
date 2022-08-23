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
  // accounts: any;
  displayedColumns: string[] = ['index', 'first_name', 'last_name', 'action'];
  accounts: Account[] = [
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "regisration_date": "01/01/2019"
    },
    {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe",
        "regisration_date": "01/01/2019"
    },
    {
        "id": 3,
        "first_name": "Davood",
        "last_name": "Majidi",
        "regisration_date": "02/08/2020"
    }
  ]
  dataSource = new MatTableDataSource<Account>(this.accounts);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

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
        data => {
          this.accounts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
