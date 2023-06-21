import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-sub-logs',
  templateUrl: './timer-sub-logs.component.html',
  styleUrls: ['./timer-sub-logs.component.css']
})
export class TimerSubLogsComponent implements OnInit {


  startLogs: string[] = [];
  pauseLogs: string[] = [];

  constructor(private timerService: TimerService){

  }
  ngOnInit(): void {
    this.timerService.getTimerStartLogs().subscribe(logs => this.startLogs = logs);
    this.timerService.getTimerPauseLogs().subscribe(logs => this.pauseLogs = logs);
  }

  

}
