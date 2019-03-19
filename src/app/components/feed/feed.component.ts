import { Component, OnInit } from "@angular/core";
import { TweetService } from "../../tweet.service";

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

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.getUser();
  }

  getFeed(): void {
    this.tweetService.getFeed().subscribe(feed => (this.feed = feed));
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
