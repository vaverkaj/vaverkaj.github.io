import { Component, OnInit } from '@angular/core';
import { loadAnimation } from 'src/app/load.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [loadAnimation],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }
}
