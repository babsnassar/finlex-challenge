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
  accountDetail: any;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.getAccount(+this.route.snapshot.paramMap.get('id')!);
  }

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
}
