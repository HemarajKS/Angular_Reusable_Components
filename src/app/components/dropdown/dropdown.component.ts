import { Component, Input, forwardRef } from '@angular/core';
import { allowedDateSelectVariantTypes } from 'src/app/interfaces/types';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DropdownComponent {
  @Input() options: any;
  @Input() variant: allowedDateSelectVariantTypes = 'sm';
  @Input() placeholder:string = 'Select';

  selectedValue: string | null = null;

  onSelectedValueChanged(value: string) {
    this.selectedValue = value;
    this.onChange(this.selectedValue);
  }

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};
}
