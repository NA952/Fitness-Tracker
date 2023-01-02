import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/Exercise';
import { ExerciseService } from 'src/app/services/exercise.service';
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit{
  exercises: Exercise[] = [];
  @Input() addClicked: boolean = false;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void{
    this.exerciseService.getExercises().subscribe((exercises) => this.exercises = exercises);
  }

  deleteExercise(exercise: Exercise) {
    console.log(exercise.name)
    this.exerciseService.deleteExerise(exercise).subscribe(() => this.exercises = this.exercises.filter(ex => ex.id !== exercise.id))
  }

  addExercise(exericise: Exercise) {
    this.addClicked = false;
    this.exerciseService.addExercise(exericise).subscribe(() => this.exercises.push(exericise))
  }

  updateExercise(exercise: Exercise) {
    this.exerciseService.updateExercise(exercise).subscribe(() => this.exercises.forEach(ex => {if(ex.id == exercise.id) {ex = exercise}}))
  }
}
