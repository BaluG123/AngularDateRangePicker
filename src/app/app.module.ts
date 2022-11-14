import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, DateRangePickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
