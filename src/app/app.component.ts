import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fintess-tracker';
  addClicked: boolean = false;

  onAddClicked() {
    console.log(this.addClicked)
    this.addClicked = !this.addClicked
  } 
}
