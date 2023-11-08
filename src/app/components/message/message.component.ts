import { Component, Input } from '@angular/core';
import { allowedMessageTypes } from 'src/app/interfaces/types';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  ngOnInit() {
    this.getTypeStyle();
  }

  @Input() type!: allowedMessageTypes;
  @Input() label!: string;
  wrapperClass: string = '';
  icon: string = '';
  iconClassType: string = '';
  labelClass: string = '';

  getClassType() {
    return {
      messageWrapper: true,
      [this.wrapperClass]: true,
    };
  }

  getIconClassType() {
    return {
      'fa-solid': true,
      iconClass: true,
      [this.iconClassType]: true,
      [this.icon]: true,
    };
  }

  getLabelClass() {
    return {
      labelStyle: true,
      [this.labelClass]: true,
    };
  }

  getTypeStyle() {
    if (this.type === 'success') {
      this.wrapperClass = 'successWrapper';
      this.icon = 'fa-check';
      this.iconClassType = 'successIcon';
      this.labelClass = 'successLabel';
    } else if (this.type === 'info') {
      this.wrapperClass = 'infoWrapper';
      this.icon = 'fa-info';
      this.iconClassType = 'infoIcon';
      this.labelClass = 'infoLabel';
    } else if (this.type === 'warning') {
      this.wrapperClass = 'warningWrapper';
      this.icon = 'fa-exclamation';
      this.iconClassType = 'warningIcon';
      this.labelClass = 'warningLabel';
    } else {
      this.wrapperClass = 'errorWrapper';
      this.icon = 'fa-xmark';
      this.iconClassType = 'errorIcon';
      this.labelClass = 'errorLabel';
    }
  }
}
