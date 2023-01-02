import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from 'src/Exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:5000/exercises';
  private mongoUrl = 'https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/exercises'
  str = 'https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/postExercise?id={}'
  ss = 'https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/postExercise?id=hello&name=world&weight=44'
  constructor(private http: HttpClient) { }

  httpHeader = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Headers', '*')
    .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
    .set('api-key', 'oFYlYsKB9RICYWnTLIXW7z1IALbP7ZXRcn9bRtu5oAnyU41WfMQ3Wrx1OgYpAR3l') 

  
  getExercises(): Observable<Exercise[]>{
    return this.http.get<Exercise[]>(this.mongoUrl)
  }

  deleteExerise(exercise: Exercise): Observable<Exercise> {

    const url = `https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/deleteExercise?id=${exercise._id}`
    return this.http.delete<Exercise>(url)
  }

  updateExercise(exercise: Exercise): Observable<Exercise> {
    const url = `https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/updateExercise?id=${exercise._id}&weight=${exercise._weight}`
    return this.http.put<Exercise>(url, exercise)
  }
  addExercise(exercise: Exercise): Observable<Exercise> {
    const addUri = `https://eu-central-1.aws.data.mongodb-api.com/app/fitness-uovht/endpoint/postExercise?id=${exercise._id}&name=${exercise._name}&weight=${exercise._weight}`
    return this.http.post<Exercise>(addUri, exercise)
  }

}


