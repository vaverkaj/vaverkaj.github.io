import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { TitleComponent } from "./components/title/title.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LinksComponent } from "./components/links/links.component";
import { PostsComponent } from "./components/posts/posts.component";
import { ThemeService } from './services/theme.service';
import { PostStateService } from './services/post-state.service';
import { ProjectStateService } from './services/project-state.service';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    TitleComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    PostsComponent,
    RouterOutlet,
    ContactComponent,
    LinksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('fade') fadeElements!: QueryList<ElementRef>;

  private themeService = inject(ThemeService);
  readonly postState = inject(PostStateService);
  readonly projectState = inject(ProjectStateService);

  constructor() {}

  ngOnInit(): void {
    this.themeService.init();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
            entry.target.addEventListener('animationend', () => {
              const el = entry.target as HTMLElement;
              el.style.animation = 'none';
              el.style.opacity = '1';
              el.style.transform = 'none';
            }, { once: true });
          }
        });
      },
      { threshold: 0.1 }
    );

    this.fadeElements.forEach(el => observer.observe(el.nativeElement));
  }
}
