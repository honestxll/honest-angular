import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  constructor() {}
  demoObservable: Observable<any>;
  demoSubscription: Subscription;
  ngOnDestroy(): void {
    console.log('ngOnDestroy: Unsubscribe demo observable.');
    this.demoSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.demoObservable = of('hello', 'hola', '你好');
    this.demoObservable = interval(1000);
  }

  onClick() {
    const observer = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Demo observable complete.'),
    };
    this.demoSubscription = this.demoObservable.subscribe(observer);
  }

  unsubscribe() {
    this.demoSubscription.unsubscribe();
  }
}
