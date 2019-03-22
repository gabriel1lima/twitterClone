import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

var configTwitter = require('../../configTwitter.json');

@Injectable({
  providedIn: "root"
})
export class TweetService {
  baseUrlFeed = "http://192.168.111.45:3000/feed";
  baseUrlUser = "http://192.168.111.45:3000/users";
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

  /* POST - Cria usuário */
  addUser(user: object): Observable<any> {
    return this.http
      .post(this.baseUrlUser, user, this.httpOptions)
      .pipe(tap(_ => console.log("create user")))
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

  /* GET - Trends */
  getTrends(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + configTwitter.BearerToken })
    };
    return this.http
      .get("/api/1.1/trends/place.json?id=23424768", httpOptions)
      .pipe(tap(_ => console.log("get trends")));
  }

  constructor(private http: HttpClient) {}
}
