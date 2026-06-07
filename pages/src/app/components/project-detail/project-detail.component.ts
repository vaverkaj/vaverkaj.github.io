import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectStateService } from '../../services/project-state.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  readonly projectState = inject(ProjectStateService);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const project = this.projectState.getBySlug(slug ?? '');
    if (!project) return;
    this.projectState.activeProject.set(project);
    this.projectState.navProjectOpen.set(true);
    this.projectState.transitioningProject.set(null); // remove card name before new-state snapshot
  }

  ngOnDestroy(): void {
    this.projectState.navProjectOpen.set(false);
    this.projectState.transitioningProject.set(this.projectState.activeProject()); // give card its name for new-state snapshot
    this.projectState.activeProject.set(null);
  }
}
