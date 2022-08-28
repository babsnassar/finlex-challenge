import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})

export class ViewAccountComponent implements OnInit {
  accountDetail: any;
  id: number;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,) {
      // get id from the URL
      this.id = +this.route.snapshot.paramMap.get('id')!
    }

  // it is called after Angular has initialized all data-bound properties
  ngOnInit(): void {
    this.getAccount(this.id);
  }

  // function to get a specific account by id
  getAccount(id:number): void {
    this.accountService.get(id)
      // it will run whenever any change is made in the observable
      .subscribe( {
        next: data => this.accountDetail = data,
        error: err => console.log(err),
      });
  }
}
