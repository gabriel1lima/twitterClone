import { Component, OnInit } from "@angular/core";
import { TweetService } from "../../tweet.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  feed: [];
  user: {};
  tweetModalComment: {};
  tweetModal: {};
  trends: {}

  constructor(private tweetService: TweetService, private router: Router) {
    if (!localStorage.getItem("@cloneTwitter:username")){
      this.router.navigate(['login'])
    }
  }
  
  ngOnInit() {
    this.getUser();
  }

  getFeed(): void {
    this.tweetService.getFeed().subscribe(feed => ((this.feed = feed), this.getTrends()));
  }

  getTrends(): void{
    this.tweetService.getTrends().subscribe(res => (this.trends = res[0]['trends'].slice(0,9)))
  }

  getUserStorage(): string {
    return localStorage.getItem("@cloneTwitter:username");
  }

  emitterTweetComment(event) {
    this.tweetModalComment = event;
  }

  emitterTweet(event) {
    this.tweetModal = event;
  }

  getUser(): void {
    var nick = this.getUserStorage();
    this.tweetService
      .getUser(nick)
      .subscribe(user => ((this.user = user[0]), this.getFeed()));
  }
}
