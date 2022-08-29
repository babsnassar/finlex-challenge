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
  message = '';

  constructor(private accountService: AccountService) { }

  // function to create a new account with two fields: first_name and last_name
  addAccount(): void {
    const payload:AccountPayload = {
      first_name: this.first_name,
      last_name: this.last_name,
    }

    this.accountService.create(payload)
      // it will run whenever any change is made in the observable
      .subscribe( {
        next: account => this.message = `Account ${account.first_name} ${account.last_name} with id ${account.id} was successfully create at ${account.regisration_date}!`,
        error: () => this.message = 'It was not possible to create this account!',
        complete: () => this.submitted = true
      });
  }
}
