import { Component, OnInit, Input } from "@angular/core";
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
  inputImage: boolean;
  cond: boolean = true;

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent
  ) {}

  ngOnInit() {}

  onSubmit() {
    const tweet = {
      user: this.user,
      content: $('#textTweet').val(),
      img: $('#urlImagem').val(),
      comments: 0,
      retweets: 0,
      likes: 0,
      created_at: new Date()
    };
    
    this.tweetService.createTweet(tweet).subscribe(_ => (this.clearInputs(), this.feed.getFeed()));
  }

  clearInputs(){
    $('#textTweet').val('');
    $('#urlImagem').val('');
    $("#textTweet").css("height", "");
    this.clickInputText();
  }

  clickInputText(){
    if(this.cond){
      this.inputImage = !this.inputImage;
      this.cond = false
    }
  }
  
  blurInputText(){
    $("#textTweet").css("height", "100px");
  }
  
  clickButtonImagem(){
    this.cond = true;
    this.clickInputText()
    $("#textTweet").css("height", "100px");
  }
}
