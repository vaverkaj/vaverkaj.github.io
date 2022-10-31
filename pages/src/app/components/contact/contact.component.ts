import { Component, OnInit } from '@angular/core';
import { loadAnimation } from 'src/app/load.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [loadAnimation],
})
export class ContactComponent implements OnInit {
  constructor() {}
  
  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }

  ngOnInit() {}
}
