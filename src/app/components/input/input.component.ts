import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() isClearable: boolean;
  @Output() valueChange = new EventEmitter<string>();

  togglePassword: boolean = false;

  constructor() {
    this.type = '';
    this.placeholder = '';
    this.value = '';
    this.isClearable = false;
  }

  handleFunc(type: string) {
    if (type === 'toggle') {
      this.togglePassword = !this.togglePassword;
    } else if (type === 'clear') {
      this.value = '';
    }
  }

  onInputChange(event: any) {
    const newValue = event.target.value;
    this.valueChange.emit(newValue);
  }

  getInputType(): string {
    if (this.type === 'text' || this.type === 'email') {
      return this.type;
    } else if (this.type === 'password') {
      return this.togglePassword ? 'text' : 'password';
    }
    return 'text';
  }
}
