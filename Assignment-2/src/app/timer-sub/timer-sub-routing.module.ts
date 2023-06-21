import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerSubComponent } from './timer-sub.component';

const routes: Routes = [{ path: '', component: TimerSubComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimerSubRoutingModule {}