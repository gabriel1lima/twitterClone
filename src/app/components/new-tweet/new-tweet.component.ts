import { Component, OnInit, Input } from "@angular/core";
import { TweetService } from "../../tweet.service";
import { FeedComponent } from "../feed/feed.component";
@Component({
  selector: "app-new-tweet",
  templateUrl: "./new-tweet.component.html",
  styleUrls: ["./new-tweet.component.css"]
})
export class NewTweetComponent implements OnInit {
  @Input() user: object;

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent
  ) {}

  ngOnInit() {}

  onSubmit(content: string) {
    const tweet = {
      user: this.user,
      content: content,
      comments: 0,
      retweets: 0,
      likes: 0,
      img: "",
      created_at: new Date()
    };
    console.log(tweet);
    this.tweetService.createTweet(tweet).subscribe(_ => this.feed.getFeed());
  }
}
