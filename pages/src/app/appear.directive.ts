import {
  ElementRef,
  Output,
  Directive,
  OnDestroy,
  EventEmitter,
  AfterViewChecked,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appear]',
})
export class AppearDirective implements OnInit, OnDestroy {
  @Output() appear: EventEmitter<void>;

  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<void>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility() {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        this.unsubscribe();
        this.appear.emit();
      }
    }
  }
  isVisible() {
    return (
      this.scrollPos >= this.elementPos + this.elementHeight ||
      this.scrollPos + this.windowHeight >= this.elementPos
    );
  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll')
      .pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize')
      .pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscribe();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}
