import { Component, OnInit } from '@angular/core';
import { FirstService } from './services/first.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(private fd: FirstService) { }

  ngOnInit(): void {
    this.fd.start()
  }

}
