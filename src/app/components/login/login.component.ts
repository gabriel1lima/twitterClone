import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TweetService } from "../../tweet.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  msg: string

  constructor(private router: Router, private tweetService: TweetService) {}

  ngOnInit() {}

  login(username: string): void {
    this.msg = ""

    if (!username.length){
      this.msg = "Informe seu nome de usuário"
      return;
    }

    this.tweetService.getUser(username)
      .subscribe(res => {
        if (res[0]){
          localStorage.setItem("@cloneTwitter:username", username);
          this.router.navigate(["feed"]);
        } else {
          this.msg = "Usuário não cadastrado!"
        }
      })
  }
}
