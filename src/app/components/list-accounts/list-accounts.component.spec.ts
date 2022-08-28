import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListAccountsComponent } from './list-accounts.component';

describe('ListAccountsComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ListAccountsComponent]
      }));

       it('should be created', () => {
        const service: ListAccountsComponent = TestBed.inject(ListAccountsComponent);
        expect(service).toBeTruthy();
       })
});
