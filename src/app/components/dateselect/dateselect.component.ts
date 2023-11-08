// import { Component, Input } from '@angular/core';
import {
  Component,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { allowedDateSelectVariantTypes } from 'src/app/interfaces/types';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateselectComponent),
  multi: true,
};

@Component({
  selector: 'app-dateselect',
  templateUrl: './dateselect.component.html',
  styleUrls: ['./dateselect.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DateselectComponent {
  @ViewChild('dateSelectContainer') dateSelectContainer: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  @Input() options: any;
  @Input() isDropDown!: boolean;
  @Input() placeholder: string = 'Select';
  @Input() variant: allowedDateSelectVariantTypes = 'sm';
  openDropdown = false;
  dropdownSelectOption: any;
  selectedOptionIndex!:number;
  selectedItem: string | null = null;
  selectedValue: string | null = null;
  variantClass!: string;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (
      this.dateSelectContainer &&
      !this.dateSelectContainer.nativeElement.contains(event.target)
    ) {
      this.openDropdown = false;
    }
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

  getVariantClass(){
    if (this.variant === 'sm') {
      this.variantClass = 'small';
      return {
        dateSelectWrapper: true,
        [this.variantClass]: true,
      };
    } else if (this.variant === 'md') {
      this.variantClass = 'medium';
      return {
        dateSelectWrapper: true,
        [this.variantClass]: true,
      };
    }else if(this.variant === 'lg') {
      this.variantClass = 'large';
      return {
        dateSelectWrapper: true,
        [this.variantClass]: true,
      };
    }else{
      this.variantClass = 'auto';
      return {
        dateSelectWrapper: true,
        [this.variantClass]: true,
      };
    }
  }

  handleFunc(type: string, value?: any) {
    if (type === 'click') {
      this.openDropdown = !this.openDropdown;
    } else if (type === 'itemselect') {
      this.openDropdown = false;
      this.selectedOptionIndex = this.options.indexOf(value);
      this.selectedValue = value;
      this.onChange(value);
    } else if (type === 'control') {
      if (value === 'up') {
        this.selectedOptionIndex =
          (this.selectedOptionIndex - 1 + this.options.length) %
          this.options.length;
          this.onChange(this.options[this.selectedOptionIndex]);
      } else if (value === 'down') {
        this.selectedOptionIndex =
          (this.selectedOptionIndex + 1) % this.options.length;
          this.onChange(this.options[this.selectedOptionIndex]);
      }
    }
  }
}
