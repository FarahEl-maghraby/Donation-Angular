import { trigger, state, style, transition , animate } from '@angular/animations';

export let fadeIn = trigger('fadeIn',
[
    state('void',style({opacity:0.5})),
    transition(':enter',[animate(2000)])

])