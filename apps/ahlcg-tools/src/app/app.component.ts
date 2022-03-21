import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'ahlcg-tools-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
