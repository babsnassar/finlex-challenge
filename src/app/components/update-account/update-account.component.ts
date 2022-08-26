import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})

export class UpdateAccountComponent implements OnInit {
  accountDetail: any;
  message = '';
  constructor(
    private location: Location,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.getAccount(+this.route.snapshot.paramMap.get('id')!);
  }
  // refactor this
  getAccount(id:number): void {
    this.accountService.get(id)
      .subscribe(
        data => {
          this.accountDetail = data;
        },
        error => {
          console.log(error);
        });
  }
  updateAccount(): void {
    this.accountService.update(this.accountDetail.id, this.accountDetail)
      .subscribe(
        response => {
          this.message = 'The account was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  cancel() {
    this.location.back();
  }
}
