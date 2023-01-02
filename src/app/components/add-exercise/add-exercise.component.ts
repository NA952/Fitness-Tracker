import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from 'src/Exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent {
  @Output() onAddExercise: EventEmitter<Exercise> = new EventEmitter()
  name?: string;
  weight?: number;

  onSubmit() {
    if(!this.name || !this.weight) {
      alert("Incomplete form")
      return
    }

    const newExercise = {
      _id: this.getRandom(9).toString(),
      _name: this.name!,
      _weight: this.weight!
    }
    this.onAddExercise.emit(newExercise)

    this.name = ''
    this.weight = undefined
  }

  getRandom(length: number) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  }
}
