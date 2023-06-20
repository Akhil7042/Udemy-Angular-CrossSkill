import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { TimerComponent } from "./timer.component";
import { CommonModule, DatePipe } from "@angular/common";
import { TimerRoutingModule } from "./timer-routing.module";
import { TimerCountdownComponent } from './timer-countdown/timer-countdown.component';
import { TimerStartComponent } from './timer-start/timer-start.component';
import { TimerStartCountComponent } from './timer-start-count/timer-start-count.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';

@NgModule({
    declarations: [
        TimerComponent,
        TimerCountdownComponent,
        TimerStartComponent,
        TimerStartCountComponent,
        TimerLogsComponent
    ],
    imports: [
        CommonModule,
        TimerRoutingModule,
        FormsModule
    ],
    providers: [DatePipe]
})
export class TimerModule {

}