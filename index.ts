import { timer, combineLatest } from 'rxjs';

// Example 1 BEGIN: Combining observables emitting at 3 intervals

// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 20);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 20);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 20);

// when one timer emits, emit the latest values from each timer as an array

// uncomment ++
// let arr = combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
//   ([timerValOne, timerValTwo, timerValThree]) => {
//     console.log(
//       `Timer One Latest: ${timerValOne},
//      Timer Two Latest: ${timerValTwo},
//      Timer Three Latest: ${timerValThree}`
//     );
//   }
// );

/*
Example:
timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
*/
// Example 1 END

// Example 2 BEGIN: combineLatest with projection function
const timer1$ = timer(1000, 4000);
const timer2$ = timer(2000, 4000);
const timer3$ = timer(3000, 4000);

combineLatest(
  timer1$,
  timer2$,
  timer3$,
  // combineLatest also takes an optional projection function
  (one, two, three) => {
    return `T1 (Proj) Ltst: ${one}, 
              T2 (Proj) Ltst: ${two}, 
              T3 (Proj) Ltst: ${three}`;
  }
).subscribe(console.log);
// Example 2 END: combineLatest with projection function
