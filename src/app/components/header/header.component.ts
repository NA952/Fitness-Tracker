import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() clickedEmitter = new EventEmitter()
  @Input() addClicked: boolean = false

  faX = faX


  onClick(){
    console.log('click')
    this.clickedEmitter.emit();
  }
}
