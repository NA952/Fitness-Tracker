import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from 'src/Exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:5000/exercises';
  constructor(private http: HttpClient) { }


  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl);
  }

  deleteExerise(exercise: Exercise): Observable<Exercise> {
    const url = `${this.apiUrl}/${exercise.id}`
    return this.http.delete<Exercise>(url)
  }

  updateExercise(exercise: Exercise): Observable<Exercise> {
    const url = `${this.apiUrl}/${exercise.id}`
    return this.http.put<Exercise>(url, exercise)
  }
  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.apiUrl, exercise)
  }

}


