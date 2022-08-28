import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewAccountComponent } from './view-account.component';

describe('ViewAccountComponent', () => {

  let service: ViewAccountComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ViewAccountComponent, useValue: ViewAccountComponent }
      ]
    });
    service = TestBed.inject(ViewAccountComponent);
  });

  it('should be created', () => {
  expect(service).toBeTruthy();
  })
});
