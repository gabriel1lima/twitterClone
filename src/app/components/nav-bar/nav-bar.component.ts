import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  @Input() user: object;

  constructor(private router: Router) {}

  ngOnInit() {}

  logout(){
    this.router.navigate(["login"]);
  }
}
