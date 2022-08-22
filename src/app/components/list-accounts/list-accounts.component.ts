import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})

export class ListAccountsComponent implements OnInit {
  accounts: any;
  delete:Account[] = [
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
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
    this.retrieveAccounts();
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
