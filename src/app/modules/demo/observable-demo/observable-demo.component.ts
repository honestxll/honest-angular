import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  demoObservable: Observable<string>;
  constructor() {}

  ngOnInit() {
    this.demoObservable = of('hello', 'hola', '你好');
  }

  onClick() {
    const observer = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Demo observable complete.'),
    };
    this.demoObservable.subscribe(observer);
  }
}
