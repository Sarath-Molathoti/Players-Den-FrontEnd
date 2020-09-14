import { TestBed } from '@angular/core/testing';

import { TeamRegisterService } from './team-register.service';

describe('TeamRegisterService', () => {
  let service: TeamRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
