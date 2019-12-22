import { TestBed } from '@angular/core/testing';

import { WedstrijdService } from './wedstrijd.service';

describe('WedstrijdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WedstrijdService = TestBed.get(WedstrijdService);
    expect(service).toBeTruthy();
  });
});
