import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
})
export class ProjectComponent implements OnInit {
  @Input() imageUrl = '';
  constructor() { }

  ngOnInit(): void { }
  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }
}
