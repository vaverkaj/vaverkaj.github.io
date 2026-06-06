import { ApplicationRef, Injectable, inject, signal } from '@angular/core';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  type: string;
  title: string;
  imageUrl: string;
  description: string;
  links: ProjectLink[];
  technologies: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectStateService {
  readonly activeProject = signal<Project | null>(null);
  readonly transitioningProject = signal<Project | null>(null);
  readonly navProjectOpen = signal(false);
  private savedScrollY = 0;
  private appRef = inject(ApplicationRef);

  open(project: Project): void {
    this.savedScrollY = window.scrollY;
    this.transitioningProject.set(project);
    this.appRef.tick();
    this.transition('vt-forward', () => {
      this.activeProject.set(project);
      this.navProjectOpen.set(true);
      this.appRef.tick();
      window.scrollTo({ top: 0, behavior: 'instant' } as ScrollToOptions);
    }).then(() => this.transitioningProject.set(null));
  }

  close(): void {
    const y = this.savedScrollY;
    this.navProjectOpen.set(false);
    this.appRef.tick();
    this.transitioningProject.set(this.activeProject());
    this.transition('vt-back', () => {
      this.activeProject.set(null);
      this.appRef.tick();
      window.scrollTo({ top: y, behavior: 'instant' } as ScrollToOptions);
    }).then(() => this.transitioningProject.set(null));
  }

  private transition(direction: string, update: () => void): Promise<void> {
    document.documentElement.classList.add(direction);
    const cleanup = () =>
      document.documentElement.classList.remove('vt-forward', 'vt-back');

    if (!('startViewTransition' in document)) {
      update();
      cleanup();
      return Promise.resolve();
    }

    const vt = (document as any).startViewTransition(update);
    return vt.finished.then(cleanup);
  }
}
