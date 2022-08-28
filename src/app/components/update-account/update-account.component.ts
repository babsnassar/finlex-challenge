import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute) { }

  // it is called after Angular has initialized all data-bound properties
  ngOnInit(): void {
    // get id from the URL
    this.getAccount(+this.route.snapshot.paramMap.get('id')!);
  }

  // function to get a specific account by id
  getAccount(id:number): void {
    this.accountService.get(id)
      .subscribe( {
        next: data => this.accountDetail = data,
        error: err => console.log(err),
      });
  }

  // function to update a specific account by id
  updateAccount(): void {
    this.accountService.update(this.accountDetail.id, this.accountDetail)
      // it will run whenever any change is made in the observable
      .subscribe( {
        next: () => this.message = 'The account was updated successfully!',
        error: err => console.log(err),
      });
  }

  // function to go to the previous page
  cancel() {
    this.location.back();
  }
}
