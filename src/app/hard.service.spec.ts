import { TestBed } from '@angular/core/testing';

import { HardService } from './hard.service';

describe('HardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardService = TestBed.get(HardService);
    expect(service).toBeTruthy();
  });
});
