import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  standalone: true,
})
export class WorkComponent implements OnInit {
  selectedJob = 0;

  constructor() { }

  ngOnInit() { }

  selectJob(index: number): void {
    this.selectedJob = index;
  }

  isLoaded = false;
  appear() {
    this.isLoaded = true;
  }
}
