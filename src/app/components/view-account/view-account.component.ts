import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})

export class ViewAccountComponent implements OnInit {
  accountId: any;
  accountDetail: any;
  delete:Account = {
    "id": 9,
    "first_name": "David",
    "last_name": "Smith",
    "regisration_date": "08/15/2022"
}

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) {
      // this.accountId = 0;
      // this.accountDetail = { id: 0, first_name: '', last_name: ''}
    }
  ngOnInit(): void {
    this.getAccount(+this.route.snapshot.paramMap.get('id')!);
  }
  getAccount(id:number): void {
    this.accountService.get(id)
      .subscribe(
        data => {
          this.accountDetail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
