import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  parentVariable = 'Stiles Stilinski is a character in Teen Wolf';
  childData: number | undefined;

  constructor() {
    console.log('ParentComponent constructor');
  }

  receiveEvent(event: number) {
    this.childData = event;
    console.log(event);
  }
}
