import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStateService } from '../../services/project-state.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  readonly projectState = inject(ProjectStateService);
}
