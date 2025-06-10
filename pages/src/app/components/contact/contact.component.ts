import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent implements OnInit {
  constructor() { }

  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }

  ngOnInit() { }
}
