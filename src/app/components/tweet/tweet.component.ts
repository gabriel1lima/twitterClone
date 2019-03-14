import { Component, OnInit, Input } from "@angular/core";
import { TweetService } from "../../tweet.service";
import { FeedComponent } from "../feed/feed.component";
@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent implements OnInit {
  @Input() tweet: object;

  ngOnInit() {}

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent
  ) {}

  like(): void {
    var tweet = this.tweet;
    tweet["likes"] += 1;
    this.tweetService.likeTweet(tweet).subscribe(_ => this.feed.getFeed());
  }
}
