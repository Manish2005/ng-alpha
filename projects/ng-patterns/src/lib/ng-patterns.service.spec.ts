import { TestBed } from '@angular/core/testing';

import { NgPatternsService } from './ng-patterns.service';

describe('NgPatternsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPatternsService = TestBed.get(NgPatternsService);
    expect(service).toBeTruthy();
  });
});
