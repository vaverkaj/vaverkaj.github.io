import { Component, Input, OnInit } from '@angular/core';
import { loadAnimation } from 'src/app/load.animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [loadAnimation],
})
export class ProjectComponent implements OnInit {
  @Input() switched = false;
  constructor() {}

  ngOnInit(): void {}
  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }
}
