import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_reusable_components';
  value: string = '';

  onInputValueChange(newValue: string) {
    this.value = newValue;
  }
}
