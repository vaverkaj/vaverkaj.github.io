import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
  state,
} from '@angular/animations';

export const loadAnimation: AnimationTriggerMetadata = trigger(
  'loadAnimation',
  [
    state(
      'unloaded',
      style({ opacity: 0, transform: 'translateY(10%)'})
    ),
    state('loaded', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('unloaded => loaded', [animate('500ms ease-in')]),
  ]
);
