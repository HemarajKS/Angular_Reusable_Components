import { trigger, transition, style, animate } from '@angular/animations';

export const modalAnimation = [
  trigger('scale', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0)' }),
      animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0, transform: 'scale(0)' })),
    ]),
  ]),
];
