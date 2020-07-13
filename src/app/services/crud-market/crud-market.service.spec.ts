import { TestBed } from '@angular/core/testing';

import { CrudMarketService } from './crud-market.service';

describe('CadastreMarketService', () => {
  let service: CrudMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
