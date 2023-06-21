import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
 
  


  timerStartCount: number = 0;
  timerPauseCount: number = 0;

  timerStartLogs: string[] = [];
  timerPauseLogs: string[] = [];




  timerValueSubject = new Subject<number>();
  timerStartLogsSubject = new Subject<string[]>();
  timerPauseLogsSubject = new Subject<string[]>();
  timerStartCountSubject = new Subject<number>();
  timerPauseCountSubject = new Subject<number>();


  startTimer(timerValue: number) {
    this.timerValueSubject.next(timerValue);
  }

  
  getTimerValue(): Observable<number> {
    return this.timerValueSubject.asObservable();
  }


  startTimerCountIncrease() {
    this.timerStartCountSubject.next(++this.timerStartCount);
  }

  pauseTimerCountIncrease() {
    this.timerPauseCountSubject.next(++this.timerPauseCount);
  }

  pushStartTimerLog(log: string){
    this.timerStartLogs.push(log);
    this.timerStartLogsSubject.next(this.timerStartLogs);
  }

  pushPauseTimerLog(log: string){
    this.timerPauseLogs.push(log);
    this.timerPauseLogsSubject.next(this.timerPauseLogs);
  }

  getTimerStartCount(){
    return this.timerStartCountSubject.asObservable();
  }

  getTimerPauseCount(){
    return this.timerPauseCountSubject.asObservable();
  }

  getTimerStartLogs(){
    return this.timerStartLogsSubject.asObservable();
  }

  getTimerPauseLogs(){
    return this.timerPauseLogsSubject.asObservable();
  }

  clear() {
    this.timerStartCount = 0;
    this.timerPauseCount = 0;
    this.timerStartLogs = [];
    this.timerPauseLogs = [];
    this.timerStartCountSubject.next(0);
    this.timerPauseCountSubject.next(0);
    this.timerStartLogsSubject.next([]);
    this.timerPauseLogsSubject.next([]);
  }

}
