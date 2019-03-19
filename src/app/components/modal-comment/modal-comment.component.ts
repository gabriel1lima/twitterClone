import { Component, OnInit, Input } from "@angular/core";
import { TweetService } from "../../tweet.service";
import { FeedComponent } from "../feed/feed.component";

declare var $: any;

@Component({
  selector: "app-modal-comment",
  templateUrl: "./modal-comment.component.html",
  styleUrls: ["./modal-comment.component.css"]
})
export class ModalCommentComponent implements OnInit {
  @Input() id: string;
  @Input() tweet: object;
  userLogado: object;

  constructor(
    private tweetService: TweetService,
    private feed: FeedComponent
  ) {}

  ngOnInit() {}

  onSubmit(textComment: string) {
    this.tweetService
      .getUser(localStorage.getItem("@cloneTwitter:username"))
      .subscribe(user => {
        this.userLogado = user[0];
        const comment = {
          user: this.userLogado,
          content: textComment
        };
        this.tweet["comments"].push(comment);
        this.tweetService.updateTweet(this.tweet).subscribe(_ => {
          $("#comment" + this.tweet["user"].nick + this.tweet["id"]).modal(
            "toggle"
          );
          this.feed.getFeed();
        });
      });
  }
}
