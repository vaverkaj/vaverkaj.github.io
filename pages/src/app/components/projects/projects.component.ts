import { ApplicationRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectStateService, Project } from '../../services/project-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  private router = inject(Router);
  private appRef = inject(ApplicationRef);
  readonly projectState = inject(ProjectStateService);

  get projects(): Project[] {
    return this.projectState.projects;
  }

  open(project: Project): void {
    this.projectState.transitioningProject.set(project);
    this.appRef.tick(); // flush card's view-transition-name into DOM before old-state snapshot
    this.router.navigate(['/project', project.slug]);
  }
}
