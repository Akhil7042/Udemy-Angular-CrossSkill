import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  timerValue = 0;
  startCount = 0;
  pauseCount = 0;
  startTimerLogs: string[] = [];
  pauseTimerLogs: string[] = [];

  startTimer(time: number){
    this.timerValue = time;
}

 startTimerCount(count: number){
     this.startCount = count;
}

pauseTimerCount(count: number){
     this.pauseCount = count;
}

startTimerLogsEvent(logs: string[]){
    this.startTimerLogs = logs;
}

pauseTimerLogsEvent(logs: string[]){
    this.pauseTimerLogs = logs;
}
 

}
