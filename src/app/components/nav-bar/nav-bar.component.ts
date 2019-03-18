import { Component, OnInit, Input } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() user: object

  constructor() { }

  ngOnInit() {
    $('#modalTweet').modal('toggle');
  }
  
}
