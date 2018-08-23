import { TestBed, inject } from '@angular/core/testing';

import { authService } from './auth.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [authService]
    });
  });

  it('should be created', inject([authService], (service: authService) => {
    expect(service).toBeTruthy();
  }));
});