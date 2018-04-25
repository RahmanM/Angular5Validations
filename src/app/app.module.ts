import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidationComponent } from './validations.component';
import { ReactiveComponent } from './reactive.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ValidationComponent,ReactiveComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
