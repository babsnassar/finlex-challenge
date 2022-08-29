import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddAccountComponent } from './add-account.component';
import { AccountService } from 'src/app/services/account.service';
import { Subject } from 'rxjs';
import { Account } from 'src/app/models/account.model';

describe('AddAccountComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddAccountComponent,
        AccountService,
      ]
    });
  });

  it('should be created', () => {
    const service: AddAccountComponent = TestBed.inject(AddAccountComponent);
    expect(service).toBeTruthy();
  })

  it('should create a new account', () => {
    let accService = TestBed.inject(AccountService);
    spyOn(accService, 'create').and.returnValue(new Subject<Account>());
    const service: AddAccountComponent = TestBed.inject(AddAccountComponent);
    let result = service.addAccount()
    expect(result).toBe();
  })

  const accountCreationTestCases: Account[] = [
    { id: 0, first_name: "John", last_name: "Doe", regisration_date: "001" },
    { id: 1, first_name: "Bob", last_name: "Doe", regisration_date: "002" },
    { id: 3, first_name: "John", last_name: "Bob", regisration_date: "003" },
  ];

  accountCreationTestCases.forEach((account, index) => {
    it('should change the message when success', () => {
      let accService = TestBed.inject(AccountService);
      let subject = new Subject<Account>();
      spyOn(accService, 'create').and.returnValue(subject);
      const component: AddAccountComponent = TestBed.inject(AddAccountComponent);
      component.addAccount();

      subject.next(account);
      let expectedMessage = `Account ${account.first_name} ${account.last_name} with id ${account.id} was successfully create at ${account.regisration_date}!`;
      expect(component.message).toBe(expectedMessage);
    })
  });

  it('should change the message when fail', () => {
    let accService = TestBed.inject(AccountService);
    let subject = new Subject<Account>();
    spyOn(accService, 'create').and.returnValue(subject);
    const component: AddAccountComponent = TestBed.inject(AddAccountComponent);
    component.addAccount();
    subject.error("any error");
    let expectedMessage = "It was not possible to create this account!";
    expect(component.message).toBe(expectedMessage);
  })
});
