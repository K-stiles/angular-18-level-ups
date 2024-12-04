import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.scss',
})
export class PageAComponent {
  num1 = 5;
  num2 = 8;

  constructor(private sharedService: SharedService) {}

  addValues() {
    this.sharedService.sum(this.num1, this.num2);
  }
}
