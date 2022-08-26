import { Component } from '@angular/core';
import { AccountPayload } from 'src/app/models/account-payload.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})

export class AddAccountComponent {
  first_name = '';
  last_name = '';
  submitted = false;
  response = '';

  constructor(private accountService: AccountService) { }

  addAccount(): void {
    const payload:AccountPayload = {
      first_name: this.first_name,
      last_name: this.last_name,
    }

    this.accountService.create(payload)
      .subscribe( {
        next: () => this.response = 'You submitted successfully!',
        error: () => this.response = 'It was not possible to create this account!',
        complete: () => this.submitted = true
      });
  }
}
