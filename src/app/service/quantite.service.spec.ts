import { TestBed } from '@angular/core/testing';

import { QuantiteService } from './quantite.service';

describe('QuantiteService', () => {
  let service: QuantiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
