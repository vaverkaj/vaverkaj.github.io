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
    let currentScrollPos = window.pageYOffset;
    let previousScroll = this.isScrollingDown;
    if (this.prevScrollpos > currentScrollPos) {
      this.isScrollingDown = false;
    } else {
      this.isScrollingDown = true;
    }

    if (previousScroll != this.isScrollingDown) {
      if (!this.isScrollingDown) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top =
          '-' + document.getElementById('navbar').scrollHeight + 'px';
      }
    }

    this.prevScrollpos = currentScrollPos;
  }
}
