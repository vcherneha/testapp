import { TestBed } from '@angular/core/testing';
import { FirstDependencyService } from '../first-dependency.service';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;
  let firstDependency: FirstDependencyService;
  let getIndexSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [TestService]
    });
    service = TestBed.inject(TestService);
    firstDependency = TestBed.inject(FirstDependencyService);
    getIndexSpy = spyOn(service, 'getIndex');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value by index', ()=> {
    spyOn(firstDependency, 'returnValue').and.returnValue('two')
    const res = service.getValues(1);
    expect(res).toBe('two');
  })

  it('should return index and value by index', () => {
    getIndexSpy.and.returnValue(2);
    const result = service.getValues(service.getIndex());
    expect(result).toBe('three');
  })
});
