import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('load1', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms 4000ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})
export class NavigationComponent {
  prevScrollpos = window.pageYOffset;
  isScrollingDown = false;
  isSideMenuOpen = false;

  themeService = inject(ThemeService);

  @HostListener('window:scroll', []) onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const cross = document.getElementById('cross');
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 0 && navbar && cross) {
      navbar.classList.remove('navbar-top');
      const previousScroll = this.isScrollingDown;
      this.isScrollingDown = this.prevScrollpos <= currentScrollPos;

      if (previousScroll !== this.isScrollingDown) {
        const hide = this.isScrollingDown && !this.isSideMenuOpen;
        const offset = hide ? `-${navbar.scrollHeight + 5}px` : '0';
        navbar.style.top = offset;
        cross.style.top = offset;
      }

      this.prevScrollpos = currentScrollPos;
    } else if (currentScrollPos === 0) {
      navbar?.classList.add('navbar-top');
    }
  }
}
