import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() heading: string = '';
  @Input() subHeading: string = '';
  @Input() mobileFullScreen: boolean = false;
  @Input() customStyle: object = {};
}
