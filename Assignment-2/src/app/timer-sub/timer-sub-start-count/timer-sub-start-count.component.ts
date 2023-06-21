import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-sub-start-count',
  templateUrl: './timer-sub-start-count.component.html',
  styleUrls: ['./timer-sub-start-count.component.css']
})
export class TimerSubStartCountComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  startCount: number = 0;
  pauseCount: number = 0;  


  ngOnInit(): void {

    this.timerService.getTimerStartCount().subscribe(count => this.startCount = count);

    this.timerService.getTimerPauseCount().subscribe(count => this.pauseCount = count);



  }

}
