import { Component, HostListener, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PostStateService } from '../../services/post-state.service';
import { ProjectStateService } from '../../services/project-state.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NavigationComponent {
  prevScrollpos = 0;
  isScrollingDown = false;
  isSideMenuOpen = false;
  navbarRevealed = false;
  navbarRevealing = false;
  private skipNextDirectionChange = false;
  private revealTimeout: ReturnType<typeof setTimeout> | null = null;

  themeService = inject(ThemeService);
  postState = inject(PostStateService);
  projectState = inject(ProjectStateService);

  constructor() {
    this.revealTimeout = setTimeout(() => {
      this.revealTimeout = null;
      if (!this.navbarRevealed) this.revealNavbar();
    }, 4000);

    let initialized = false;
    effect(() => {
      this.postState.activePost();
      this.projectState.activeProject();
      if (initialized) {
        const navbar = document.getElementById('navbar');
        const cross = document.getElementById('cross');
        if (navbar) navbar.style.top = '0';
        if (cross) cross.style.top = '0';
        this.isScrollingDown = false;
        this.prevScrollpos = Number.MAX_SAFE_INTEGER;
        this.navbarRevealed = true;
        this.skipNextDirectionChange = false;
      }
      initialized = true;
    });
  }

  get isDetailOpen(): boolean {
    return !!(this.postState.activePost() || this.projectState.activeProject());
  }

  closeActive(): void {
    if (this.postState.activePost()) {
      this.postState.close();
    } else if (this.projectState.activeProject()) {
      this.projectState.close();
    }
  }

  private revealNavbar(): void {
    this.navbarRevealing = true;
    this.navbarRevealed = true;
    this.skipNextDirectionChange = true;
    setTimeout(() => { this.navbarRevealing = false; }, 400);
  }

  scrollTo(id: string): void {
    this.isSideMenuOpen = false;
    history.pushState(null, '', '#' + id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if (this.isDetailOpen) return;

    const currentScrollPos = window.pageYOffset;

    if (!this.navbarRevealed && currentScrollPos > 0) {
      if (this.revealTimeout) {
        clearTimeout(this.revealTimeout);
        this.revealTimeout = null;
      }
      this.revealNavbar();
      this.prevScrollpos = currentScrollPos;
      return;
    }

    const navbar = document.getElementById('navbar');
    const cross = document.getElementById('cross');

    if (currentScrollPos > 0 && navbar && cross) {
      navbar.classList.remove('navbar-top');
      const previousScroll = this.isScrollingDown;
      this.isScrollingDown = this.prevScrollpos <= currentScrollPos;

      if (previousScroll !== this.isScrollingDown) {
        if (this.skipNextDirectionChange) {
          this.skipNextDirectionChange = false;
        } else {
          const hide = this.isScrollingDown && !this.isSideMenuOpen;
          const offset = hide ? `-${navbar.scrollHeight + 5}px` : '0';
          navbar.style.top = offset;
          cross.style.top = offset;
        }
      }

      this.prevScrollpos = currentScrollPos;
    } else if (currentScrollPos === 0) {
      navbar?.classList.add('navbar-top');
    }
  }
}
