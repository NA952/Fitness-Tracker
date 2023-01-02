import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from 'src/Exercise';
import { faPlus, faMinus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exercise-single',
  templateUrl: './exercise-single.component.html',
  styleUrls: ['./exercise-single.component.css']
})
export class ExerciseSingleComponent {
  @Input() exercise!: Exercise;
  @Output() onDeleteExercise = new EventEmitter<Exercise>()
  @Output() onUpdateExercise = new EventEmitter<Exercise>()

  faPlus = faPlus;
  faMinus = faMinus;
  faCircleXMark = faCircleXmark

  plus(){
    this.exercise.weight += 5;
    this.onUpdate()
  }
  minus() {
    this.exercise.weight -= 5;
    this.onUpdate()
  }

  onDelete(exercise: Exercise) {
    this.onDeleteExercise.emit(exercise)
  }

  onUpdate() {
    this.onUpdateExercise.emit(this.exercise)
  }
}
