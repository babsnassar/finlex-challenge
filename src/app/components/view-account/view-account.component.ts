import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account.model';

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
      this.id = +this.route.snapshot.paramMap.get('id')!
    }
  ngOnInit(): void {
    this.getAccount(this.id);
  }

  getAccount(id:number): void {
    this.accountService.get(id)
      .subscribe( {
        next: data => this.accountDetail = data,
        error: err => console.log(err),
      });
  }
}
