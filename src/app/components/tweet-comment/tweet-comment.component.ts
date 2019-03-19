import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tweet-comment",
  templateUrl: "./tweet-comment.component.html",
  styleUrls: ["./tweet-comment.component.css"]
})
export class TweetCommentComponent implements OnInit {
  @Input() comment: object;
  @Input() userResponse: object;

  constructor() {}

  ngOnInit() {}
}
