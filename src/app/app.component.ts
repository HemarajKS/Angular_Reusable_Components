import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_reusable_components';

  handleClick() {
    alert('Function from parent component is called');
  }
  iconHtml = '<i class="fa-solid fa-filter"></i>';
}
