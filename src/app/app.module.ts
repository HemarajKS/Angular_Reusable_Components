import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { MessageComponent } from './components/message/message.component';
import { DateselectComponent } from './components/dateselect/dateselect.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ButtonComponent, CardComponent, MessageComponent, DateselectComponent, DropdownComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
