import { TestBed } from '@angular/core/testing';
import { FirstDependencyService } from '../first-dependency.service';

import { TestService } from './test.service';

describe('TestService v2', () => {
  let service: TestService;
  let firstDependency: FirstDependencyService;
  let stringValue: string;

  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy('returnValue'),
    initValue: jasmine.createSpy('initValue'),
    initValue2: jasmine.createSpy('initValue2')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
         TestService,
         { provide: FirstDependencyService, useValue: fakeFirstDependencyService }
      ]
    });
    service = TestBed.inject(TestService);

  });

  it('shouldvalue by index', () => {
    fakeFirstDependencyService.returnValue.and.returnValue("three")
    const result = service.getValues(1);
    expect(result).toBe('three');
  })
});
