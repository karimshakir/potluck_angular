import { Injectable } from '@angular/core';
import { Event } from './models/event';
import { EVENTS } from './mock-events';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NewEvent } from './models/newEvent';

@Injectable({
  providedIn: 'root'
})
export class PotluckService {

  constructor( private http: HttpClient) { }
  
  private eventUrl = 'http://localhost:8080/events';

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


// ____________________________________________________________________________________________________________________

postEvent({newDate}: NewEvent): Observable<NewEvent[]>{
  return this.http.post<NewEvent[]>(this.eventUrl, newDate, this.httpOptions);
}

// ____________________________________________________________________________________________________________________

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error("HERE IS ERROR", error); // log to console instead


    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
