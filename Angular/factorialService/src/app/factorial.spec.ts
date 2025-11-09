import { TestBed } from '@angular/core/testing';

import { Factorial } from './factorial';

describe('Factorial', () => {
  let service: Factorial;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Factorial);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
