import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.css']
})
export class TimerCountdownComponent {

  @Input() timer: number=0;

}
