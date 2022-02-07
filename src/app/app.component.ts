import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() user!: User;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>()
  title = 'traning-center';
  show = false

  ngOnInit(): void {
  }
  showF() {
    this.show = true;
  }

  click() { 
    this.clickEvent.emit(this.user.name);
  }
   
  changeTitle() {
    this.title = 'Title changed';
  }

  isNameFull() {
    return this.user.name && this.user.secondname
  }
}

interface User {
  name: string;
  secondname: string | undefined;
}
