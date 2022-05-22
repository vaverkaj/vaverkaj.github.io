import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  prevScrollpos = window.pageYOffset;
  isScrollingDown = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    let navbar = document.getElementById('navbar');
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
      navbar.classList.remove('navbar-top');
      let previousScroll = this.isScrollingDown;
      if (this.prevScrollpos > currentScrollPos) {
        this.isScrollingDown = false;
      } else {
        this.isScrollingDown = true;
      }
      if (previousScroll != this.isScrollingDown) {
        if (!this.isScrollingDown) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = '-' + (navbar.scrollHeight + 5) + 'px';
        }
      }

      this.prevScrollpos = currentScrollPos;
    } else if (currentScrollPos === 0) {
      navbar.classList.add('navbar-top');
    }
  }
}
