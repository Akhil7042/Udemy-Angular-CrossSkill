import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { TimerSubComponent } from "./timer-sub.component";
import { CommonModule, DatePipe } from "@angular/common";
import { TimerSubRoutingModule } from "./timer-sub-routing.module";
import { TimerSubCountdownComponent } from './timer-sub-countdown/timer-sub-countdown.component';
import { TimerSubLogsComponent } from './timer-sub-logs/timer-sub-logs.component';
import { TimerSubStartComponent } from './timer-sub-start/timer-sub-start.component';
import { TimerSubStartCountComponent } from './timer-sub-start-count/timer-sub-start-count.component';




@NgModule({
    declarations: [
        TimerSubComponent,
        TimerSubCountdownComponent,
        TimerSubLogsComponent,
        TimerSubStartComponent,
        TimerSubStartCountComponent,
    ],
    imports: [
        CommonModule,
        TimerSubRoutingModule,
        FormsModule
    ],
    providers: [DatePipe]
})
export class TimerSubModule {}