import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckValueService {

  constructor() { }

  check(): boolean {
    return true;
  }
}
