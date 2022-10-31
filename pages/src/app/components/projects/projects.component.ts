import { Component, OnInit } from '@angular/core';
import { loadAnimation } from 'src/app/load.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [loadAnimation],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
