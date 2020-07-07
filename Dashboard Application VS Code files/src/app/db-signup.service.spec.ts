import { TestBed } from '@angular/core/testing';

import { DbSignupService } from './db-signup.service';

describe('DbSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbSignupService = TestBed.get(DbSignupService);
    expect(service).toBeTruthy();
  });
});
