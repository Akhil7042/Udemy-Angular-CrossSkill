import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-sub-countdown',
  templateUrl: './timer-sub-countdown.component.html',
  styleUrls: ['./timer-sub-countdown.component.css']
})
export class TimerSubCountdownComponent implements OnInit {

  timer: number = 0;

  constructor(private timerService: TimerService) { }
  
  ngOnInit(): void {
   this.timerService.getTimerValue().subscribe(curTime => this.timer = curTime);
  }



}
