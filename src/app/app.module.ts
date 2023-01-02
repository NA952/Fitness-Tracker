import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ExerciseSingleComponent } from './components/exercise-single/exercise-single.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExercisesComponent,
    ExerciseSingleComponent,
    AddExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
