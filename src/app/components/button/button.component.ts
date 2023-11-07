import { Component, Input } from '@angular/core';
import { allowedButtonTypes } from 'src/app/interfaces/types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: allowedButtonTypes = 'button';
  @Input() disabled: boolean = false;
  @Input() iconHTML: string = '';
  @Input() iconReverse: boolean = false;
  @Input() ghostButton: boolean = false;
  @Input() noBorder: boolean = false;
  @Input() customStyle: object = {};
  @Input() onClick!: () => void;
}
