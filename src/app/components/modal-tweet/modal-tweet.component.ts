import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from "../../tweet.service";
import { FeedComponent } from "../feed/feed.component";

declare var $: any;

@Component({
  selector: 'app-modal-tweet',
  templateUrl: './modal-tweet.component.html',
  styleUrls: ['./modal-tweet.component.css']
})
export class ModalTweetComponent implements OnInit {
  @Input() tweet: object;
  @Input() userLogado: object;
  
  constructor(private tweetService: TweetService, private feed: FeedComponent) { }

  ngOnInit() {
  }

  onSubmit(textComment: string) {
    const comment = {
      user: this.userLogado,
      content: textComment
    };
    this.tweet["comments"].push(comment);
    this.tweetService.updateTweet(this.tweet).subscribe(_ => {
      this.feed.getFeed();
    });
  }

}
