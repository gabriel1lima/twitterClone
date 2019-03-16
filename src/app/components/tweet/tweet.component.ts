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
  userLogado: string;
  @Input() isComment: boolean = false;
  
  ngOnInit() {
    this.userLogado = this.feed.getUserStorage()
  }

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent
  ) {}

  like(): void {
    var tweet = this.tweet;
    tweet["likes"] += 1;
    this.tweetService.likeTweet(tweet).subscribe(_ => this.feed.getFeed());
  }

  sendCreateRetweet(tweet: object): void {
    this.tweetService.createRetweet(tweet).subscribe(_ => this.feed.getFeed());
  }

  retweet(): void {
    var tweet = this.tweet;
    tweet["id"] = null;
    tweet["retweet"] = true;
    tweet["retweets"] += 1;
    tweet["created_at"] = new Date();

    this.tweetService.getUser(this.userLogado).subscribe(user => (tweet["userRetweet"] = user[0], this.sendCreateRetweet(tweet)))
  }

  delete(idTweet: number): void {
    this.tweetService.deleteTweet(idTweet).subscribe(_ => this.feed.getFeed())
  }
}
