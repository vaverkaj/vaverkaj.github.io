import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  standalone: true,
})
export class LinksComponent implements OnInit {
  constructor() { }

  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }

  ngOnInit() { }
}
