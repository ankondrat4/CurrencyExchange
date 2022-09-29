import { TestBed } from '@angular/core/testing';

import { FixerCurrencyAPIService } from './fixer-currency-api.service';

describe('FixerCurrencyAPIService', () => {
  let service: FixerCurrencyAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixerCurrencyAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
