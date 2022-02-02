import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = '30-angular-elements';
  content: any;

  constructor() {
    setTimeout(() => {
      this.content = "<app-alert message='Render dynamiclly'></app-alert>"
    }, 1000)
  }
}
