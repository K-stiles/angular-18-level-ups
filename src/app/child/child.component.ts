import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input()
  childVariable = '';

  userAge = 18;

  @Output() 
  childEvent = new EventEmitter<number>();

  constructor() {
    console.log('ChildComponent constructor');
  }

  sendEvent() {
    this.childEvent.emit(this.userAge);
  }
}
