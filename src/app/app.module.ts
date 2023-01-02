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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExercisesComponent,
    ExerciseSingleComponent,
    AddExerciseComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
    LoginComponent
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
