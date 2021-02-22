import { TestBed } from '@angular/core/testing';

import { ProductlistingService } from './productlisting.service';

describe('ProductlistingService', () => {
  let service: ProductlistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
