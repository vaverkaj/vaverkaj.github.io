import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  animations: [
    trigger('load1', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms 4000ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  prevScrollpos = window.pageYOffset;
  isScrollingDown = false;
  isSideMenuOpen = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', []) onWindowScroll() {
    let navbar = document.getElementById('navbar');
    let cross = document.getElementById('cross');
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0 && navbar && cross) {
      navbar.classList.remove('navbar-top');
      let previousScroll = this.isScrollingDown;
      if (this.prevScrollpos > currentScrollPos) {
        this.isScrollingDown = false;
      } else {
        this.isScrollingDown = true;
      }
      if (previousScroll != this.isScrollingDown) {
        if (!this.isScrollingDown || this.isSideMenuOpen) {
          navbar.style.top = '0';
          cross.style.top = '0';
        } else {
          navbar.style.top = '-' + (navbar.scrollHeight + 5) + 'px';
          cross.style.top = '-' + (navbar.scrollHeight + 5) + 'px';
        }
      }

      this.prevScrollpos = currentScrollPos;
    } else if (currentScrollPos === 0) {
      navbar?.classList.add('navbar-top');
    }
  }
}
