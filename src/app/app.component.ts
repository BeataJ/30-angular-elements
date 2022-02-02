import { Component } from '@angular/core';

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
      this.content = "<p>A paragraph!</p>"
    }, 1000)
  }
}
