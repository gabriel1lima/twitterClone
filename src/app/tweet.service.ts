import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TweetService {
  baseUrlFeed = "http://localhost:3000/feed";
  baseUrlUser = "http://localhost:3000/users";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  /* GET - Busca todos os tweets */
  getFeed(): Observable<[]> {
    return this.http
      .get<[]>(this.baseUrlFeed + "?_sort=created_at&_order=desc")
      .pipe(tap(_ => console.log("get feed")));
  }

  /* GET - Busca usuário */
  getUser(nick: string): Observable<any> {
    return this.http
      .get(this.baseUrlUser + "?nick=" + nick)
      .pipe(tap(_ => console.log("get user")));
  }

  /* POST - Cria tweet */
  createTweet(tweet: object): Observable<any> {
    return this.http
      .post(this.baseUrlFeed, tweet, this.httpOptions)
      .pipe(tap(_ => console.log("create tweet")));
  }

  /* POST - Cria retweet */
  createRetweet(tweet: object): Observable<any> {
    return this.http
      .post(this.baseUrlFeed, tweet, this.httpOptions)
      .pipe(tap(_ => console.log("create retweet")));
  }

  /* PUT - Atualiza tweet (like, comment)*/
  updateTweet(tweet: object): Observable<any> {
    return this.http
      .put(this.baseUrlFeed + `/${tweet["id"]}`, tweet, this.httpOptions)
      .pipe(tap(_ => console.log("create like/comment")));
  }

  /* DELETE - Apaga um tweet */
  deleteTweet(idTweet: number): Observable<any> {
    return this.http
      .delete(this.baseUrlFeed + `/${idTweet}`)
      .pipe(tap(_ => console.log("delete tweet")));
  }

  constructor(private http: HttpClient) {}
}
