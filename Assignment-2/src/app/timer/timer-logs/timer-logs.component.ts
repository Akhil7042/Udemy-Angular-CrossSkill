import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.css']
})
export class TimerLogsComponent {

  @Input() startTimerLogs: string[] = [];
  @Input() pauseTimerLogs: string[] = [];



}
