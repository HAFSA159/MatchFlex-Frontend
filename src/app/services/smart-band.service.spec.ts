import { TestBed } from '@angular/core/testing';

import { SmartBandService } from './smart-band.service';

describe('SmartBandService', () => {
  let service: SmartBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
