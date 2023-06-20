import { Component, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timer-start',
  templateUrl: './timer-start.component.html',
  styleUrls: ['./timer-start.component.css']
})
export class TimerStartComponent {

  constructor(public datePipe: DatePipe) { }


  timerValue: number= 0;
  timerValueFromInput: number = 0;
  intervalId: any;
  isRunning:boolean = false;
  startCount: number = 0;
  pauseCount: number = 0;
  startTimerLogs: string[] = [];
  pauseTimerLogs: string[] = [];




  @Output() startTimer = new EventEmitter<number>();
  @Output() startTimerCount = new EventEmitter<number>();
  @Output() pauseTimerCount = new EventEmitter<number>();
  @Output() startTimerLogsEvent = new EventEmitter<string[]>();
  @Output() pauseTimerLogsEvent = new EventEmitter<string[]>();
 




  onStart() {
    console.log("timer started !", this.timerValue)

    if(this.timerValue<=0){
      this.timerValue = this.timerValueFromInput;
    }

   

    if(this.timerValue>0 && !this.isRunning ){

      this.isRunning = true;
      
      this.startTimerCount.emit(++this.startCount);
      const currentStartTime = this.datePipe.transform(Date.now(), 'dd-MM-yyyy hh:mm:ssa');
      this.startTimerLogs.push('started at '+currentStartTime);
      this.startTimerLogsEvent.emit(this.startTimerLogs);
      
      this.intervalId = setInterval(() => {
        this.startTimer.emit(this.timerValue--);
        if (this.timerValue < 0) {
          clearInterval(this.intervalId);
          this.isRunning = false;
        }
      }, 1000);

    }
  }

  onPause(){
    if(this.isRunning){
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.pauseTimerCount.emit(++this.pauseCount);


      const pauseTime = this.datePipe.transform(Date.now(), 'dd-MM-yyyy hh:mm:ssa');

      this.pauseTimerLogs.push('paused at '+ pauseTime);
      this.pauseTimerLogsEvent.emit(this.pauseTimerLogs);
      
    }


   

  }

  onReset(){

    this.isRunning = false;
    clearInterval(this.intervalId);
    this.timerValueFromInput = 0;
    this.timerValue = 0;
    this.startTimer.emit(0);
    this.startCount = 0;
    this.pauseCount = 0;
    this.startTimerLogs = [];
    this.pauseTimerLogs = [];
    this.startTimerCount.emit(0);
    this.pauseTimerCount.emit(0);
    this.startTimerLogsEvent.emit([]);
    this.pauseTimerLogsEvent.emit([]);
  }
}
