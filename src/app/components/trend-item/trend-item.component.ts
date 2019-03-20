import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.css']
})
export class TrendItemComponent implements OnInit {

  @Input() trend: {}
  
  constructor() { }

  ngOnInit() {
  }

}
