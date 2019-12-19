import { Injectable } from '@angular/core';
import { Event } from './models/event';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NewEvent } from './models/newEvent';
import { User } from './models/user';
import { UserEvents } from './models/userEvents';

@Injectable({
  providedIn: 'root'
})
export class PotluckService {
  static getEventsById(user: any) {
    throw new Error("Method not implemented.");
  }

  constructor( private http: HttpClient) { }
  
  private eventUrl = 'http://localhost:8080/events';
  private postUrl = 'http://localhost:8080/newEvent';
  private deleteUrl = 'http://localhost:8080/deleteEvent';
  private userUrl = 'http://localhost:8080/user'
  private userEventUrl = 'http://localhost:8080/userEvents'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


// ____________________________________________________________________________________________________________________


  /** Hitting DB and returning all events */
getEvents (): Observable<Event[]> {
  return this.http.get<Event[]>(this.eventUrl)
  .pipe(
    catchError(this.handleError<Event[]>('getEvents', []))
  );
}

getUser (): Observable<User[]>{
  const id = 2
  const url = `${this.userUrl}/${id}`
  return this.http.get<User[]>(url)
  // .pipe(map((data: any) => data.result ),
  // catchError(error => { return throwError('Something went wrong in delete!')})
  // );
  
}
// ____________________________________________________________________________________________________________________
getEventsById(user: User): Observable<UserEvents[]>{

  console.log("SERVICE GET U E", user.id)
  const id = user.id
  const url = `${this.userEventUrl}/${id}`
  return this.http.get<UserEvents[]>(url)
}

// ____________________________________________________________________________________________________________________


postEvent(newEvent: NewEvent): Observable<NewEvent[]>{
  console.log("SERVICE", newEvent)
  return this.http.post<NewEvent[]>(this.postUrl, newEvent, this.httpOptions)
}

// ____________________________________________________________________________________________________________________

deleteEvent(event: Event | number): Observable<Event[]>{
  console.log("Delete", event)
  const id = event
  const url = `${this.deleteUrl}/${id}`
  return this.http.delete<Event[]>(url, this.httpOptions)
  .pipe(map((data: any) => data.result ),
  catchError(error => { return throwError('Something went wrong in delete!')})
  );
   
}
// ____________________________________________________________________________________________________________________
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

  
    console.error("ERROR Alarm", error); 


  
    return of(result as T);
  };
}
}
