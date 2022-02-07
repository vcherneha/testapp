import { Injectable } from '@angular/core';
import { FirstDependencyService } from '../first-dependency.service';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  constructor(private firstDependencyService: FirstDependencyService) {
    this.firstDependencyService.initValue()
    this.firstDependencyService.initValue2('')
  }

 getValues(index: number): string {
   return this.firstDependencyService.returnValue(index);
 }
 getIndex() {
   return 2;
 }

 sayHi(): void {
   this.firstDependencyService.initValue2('hi')
 }
}
