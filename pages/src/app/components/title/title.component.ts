import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: [
    trigger('load1', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('load2', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms 1000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('swipe1', [
      transition('void => *', [
        style({  transform: 'translateX(-400%)' }),
        animate('2000ms 1200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('swipe2', [
      transition('void => *', [
        style({ transform: 'translateX(-300%)' }),
        animate('2000ms 800ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('load3', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms 2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('load4', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms 3000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
