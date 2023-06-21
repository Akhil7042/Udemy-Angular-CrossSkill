import { Component } from '@angular/core';
import { TimerService } from '../timer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timer-sub-start',
  templateUrl: './timer-sub-start.component.html',
  styleUrls: ['./timer-sub-start.component.css']
})
export class TimerSubStartComponent {

  timerValueFromInput: number = 0;
  timerValue: number= 0;
  isRunning: boolean = false;
  intervalId: any;

  constructor(private timerService: TimerService,public datePipe: DatePipe){}

  onStart(){

    if(this.timerValue<=0){
      this.timerValue = this.timerValueFromInput;
    }


    if(this.timerValue>0 && !this.isRunning){
      this.isRunning = true;

      this.timerService.startTimerCountIncrease();
      const currentStartTime = this.datePipe.transform(Date.now(), 'dd-MM-yyyy hh:mm:ssa');
      this.timerService.pushStartTimerLog('started at '+currentStartTime);

      this.timerService.startTimer(this.timerValue--)
      this.intervalId = setInterval(() => {
        this.timerService.startTimer(this.timerValue--)
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
      this.timerService.pauseTimerCountIncrease();
      const currentStartTime = this.datePipe.transform(Date.now(), 'dd-MM-yyyy hh:mm:ssa');
      this.timerService.pushPauseTimerLog('paused at '+currentStartTime);


    }

  }

  onReset(){

    this.isRunning = false;
    clearInterval(this.intervalId);
    this.timerValueFromInput = 0;
    this.timerValue = 0;
    this.timerService.startTimer(0)
    this.timerService.clear();

  }

}
