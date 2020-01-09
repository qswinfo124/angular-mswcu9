import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScheduleModule} from '@syncfusion/ej2-angular-schedule';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScheduleModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  entryComponents: [
    TestDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
