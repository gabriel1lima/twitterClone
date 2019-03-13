import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  baseUrlFeed = "http://localhost:3000/feed";
  baseUrlUser = "http://localhost:3000/users";

  /* GET - Busca todos os tweets */
  getFeed(): Observable<[]> {
    return this.http.get<[]>(this.baseUrlFeed)
      .pipe(
        tap(_ => console.log('get feed')),
      );
  }

  getUser(nick: string): Observable<any> {
    return this.http.get(this.baseUrlUser + '?nick=' + nick)
      .pipe(
        tap(_ => console.log('get user')),
      )
  }

  constructor(private http: HttpClient) { }
}
