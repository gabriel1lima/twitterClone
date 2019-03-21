import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TweetService } from "../../tweet.service";
import { FeedComponent } from "../feed/feed.component";
declare var $: any;

@Component({
  selector: "app-new-tweet",
  templateUrl: "./new-tweet.component.html",
  styleUrls: ["./new-tweet.component.css"]
})
export class NewTweetComponent implements OnInit {
  @Input() user: object;
  flagInputImgButton: boolean;
  flagDesabledButton: boolean = false;
  cond: boolean = true;

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent,
    private formBuilder: FormBuilder
  ) {}

  tweetForm: FormGroup;

  onInputChange(value: string) {
    if (value.length) {
      this.flagDesabledButton = true;
      return;
    }
    this.flagDesabledButton = false;
  }

  ngOnInit() {
    this.tweetForm = this.formBuilder.group({
      content: ["", Validators.maxLength(280)],
      img: [""],
      comments: [0],
      retweets: [0],
      likes: [0]
    });
  }

  onSubmit() {
    this.flagDesabledButton = false;

    const tweet = {
      ...this.tweetForm.value,
      ...{ user: this.user },
      created_at: new Date()
    };

    this.tweetService
      .createTweet(tweet)
      .subscribe(_ => (this.clearInputs(), this.feed.getFeed()));
  }

  clearInputs() {
    this.tweetForm.reset();

    $("#textTweet").css("height", "");
    this.flagInputImgButton = false;
  }

  clickInputText() {
    this.flagInputImgButton = true;
  }

  blurInputText() {
    $("#textTweet").css("height", "100px");
  }

  clickButtonImagem() {
    this.clickInputText();
    $("#textTweet").css("height", "100px");
  }
}
