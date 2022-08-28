import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateAccountComponent } from './update-account.component';

describe('UpdateAccountComponent', () => {

  let service: UpdateAccountComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: UpdateAccountComponent, useValue: UpdateAccountComponent }
      ]
    });
    service = TestBed.inject(UpdateAccountComponent);
  });

  it('should be created', () => {
  expect(service).toBeTruthy();
  })
});
