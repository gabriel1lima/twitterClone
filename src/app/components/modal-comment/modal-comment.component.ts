import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal-comment",
  templateUrl: "./modal-comment.component.html",
  styleUrls: ["./modal-comment.component.css"]
})
export class ModalCommentComponent implements OnInit {
  @Input() id: string;
  @Input() tweet: object;

  constructor() {}

  ngOnInit() {}
}
