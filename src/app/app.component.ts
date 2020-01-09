import {Component, ViewChild} from '@angular/core';
import {DropDownList} from '@syncfusion/ej2-dropdowns';
import {DateTimePicker} from '@syncfusion/ej2-calendars';
import {
  DayService,
  DragAndDropService,
  EventSettingsModel,
  MonthService,
  PopupOpenEventArgs,
  ResizeService,
  ScheduleComponent,
  WeekService,
  WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TestDialogComponent} from './test-dialog/test-dialog.component';

/**
 * Schedule editor template sample
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class AppComponent {
  @ViewChild('scheduleObj', {static: false})
  public scheduleObj: ScheduleComponent;
  public eventSettings: EventSettingsModel = {dataSource: []};
  public selectedDate: Date = new Date(2018, 1, 15);
  public showQuickInfo = false;
  public flag = true;

  constructor(private dialog: MatDialog) {
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
      const statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
      if (!statusElement.classList.contains('e-dropdownlist')) {
        const dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose status', value: statusElement.value,
          dataSource: ['New', 'Requested', 'Confirmed']
        });
        dropDownListObject.appendTo(statusElement);
        statusElement.setAttribute('name', 'EventType');
      }
      const startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({value: new Date(startElement.value) || new Date()}, startElement);
      }
      const endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({value: new Date(endElement.value) || new Date()}, endElement);
      }
    }
  }

  onShowDialog(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.hasBackdrop = false;
    const matDialogRef = this.dialog.open(TestDialogComponent, matDialogConfig);
    matDialogRef.afterClosed().subscribe();
  }
}
