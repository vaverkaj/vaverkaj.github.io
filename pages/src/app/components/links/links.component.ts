import { Component, OnInit } from '@angular/core';
import { loadAnimation } from 'src/app/load.animation';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  animations: [loadAnimation],
})
export class LinksComponent implements OnInit {
  constructor() {}

  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }

  ngOnInit() {}
}
