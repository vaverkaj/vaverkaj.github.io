import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectComponent],
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
