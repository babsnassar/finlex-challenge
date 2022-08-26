import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from 'src/app/models/account.model';

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
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAccount(+this.route.snapshot.paramMap.get('id')!);
  }

  getAccount(id:number): void {
    this.accountService.get(id)
      .subscribe( {
        next: data => this.accountDetail = data,
        error: err => console.log(err),
      });
  }

  updateAccount(): void {
    this.accountService.update(this.accountDetail.id, this.accountDetail)
      .subscribe( {
        next: () => this.message = 'The account was updated successfully!',
        error: err => console.log(err),
      });
  }

  cancel() {
    this.location.back();
  }
}
