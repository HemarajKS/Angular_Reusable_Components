import { allowedInputTypes } from './../../interfaces/types';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type!: allowedInputTypes;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() isClearable: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() valueChange = new EventEmitter<any>();
  
  value: string = '';
  togglePassword: boolean = false;
  isClearValid: boolean = false;
  isLabelValid: boolean = false;

  constructor() {
  }

  handleFunc(type: string) {
    if (type === 'toggle') {
      this.togglePassword = !this.togglePassword;
    } else if (type === 'clear') {
      this.value = '';
    }
  }

  onInputChange(event: any) {
    this.value = event
    this.valueChange.emit(this.value);
  }

  getInputType(): string {
    if(this.type === 'password') {
      this.isClearValid = false;
      this.isLabelValid = false;
      return this.togglePassword ? 'text' : 'password';
    }else if(this.type === 'checkbox' || this.type === 'radio') {
      this.isClearValid = false;
      this.isLabelValid = true;
      return this.type;
    }else{
      this.isClearValid = true;
      this.isLabelValid = false;
      return this.type;
    }
  }
}
