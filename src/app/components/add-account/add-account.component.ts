import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  first_name = '';
  last_name = '';
  submitted = false;
  response = '';
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  addAccount(): void {
    const data = {
      first_name: this.first_name,
      last_name: this.last_name,
    }
    this.accountService.create(data)
    .pipe(finalize(() => this.submitted = true))
      .subscribe(
        response => {
          console.log(response);
          this.response = 'You submitted successfully!';
        },
        error => {
          console.log(error);
          this.response = 'It was not possible to create this account!';
        })
  }
}
