import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-timer-start-count',
  templateUrl: './timer-start-count.component.html',
  styleUrls: ['./timer-start-count.component.css']
})
export class TimerStartCountComponent {

  @Input() startCount =0;
  @Input() pauseCount =0;

}
