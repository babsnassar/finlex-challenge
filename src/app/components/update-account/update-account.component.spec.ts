import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateAccountComponent } from './update-account.component';

describe('UpdateAccountComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UpdateAccountComponent]
      }));

       it('should be created', () => {
        const service: UpdateAccountComponent = TestBed.inject(UpdateAccountComponent);
        expect(service).toBeTruthy();
       })
});
