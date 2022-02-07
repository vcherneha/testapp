import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private sd: SecondService) { }

  start() {
    console.log('its real dependency')
  }

  startSecond() {
    this.sd.start();
  }
}
