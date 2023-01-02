import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'fintess-tracker';
  addClicked: boolean = false;

  onAddClicked() {
    console.log(this.addClicked)
    this.addClicked = !this.addClicked
  } 
}
