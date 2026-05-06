import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { TitleComponent } from "./components/title/title.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LinksComponent } from "./components/links/links.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { ThemeService } from './services/theme.service';
import { PostStateService } from './services/post-state.service';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    TitleComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    PostsComponent,
    PostDetailComponent,
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
          }
        });
      },
      { threshold: 0.1 }
    );

    this.fadeElements.forEach(el => observer.observe(el.nativeElement));
  }
}
