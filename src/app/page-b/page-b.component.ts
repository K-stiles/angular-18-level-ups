import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.scss',
})
export class PageBComponent {
  output = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.output = this.sharedService.sumTotal;
  }
}
