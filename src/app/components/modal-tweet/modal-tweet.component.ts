import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-tweet',
  templateUrl: './modal-tweet.component.html',
  styleUrls: ['./modal-tweet.component.css']
})
export class ModalTweetComponent implements OnInit {
  @Input() tweet: object;
  @Input() userLogado: object;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }

}
