import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TweetService } from "../../tweet.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService,
    private router: Router
  ) {}

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      nick: ["", Validators.required],
      imgProfile: ["", Validators.required]
    });
  }

  onSubmit() {
    this.tweetService.addUser(this.registerForm.value).subscribe(user => {
      localStorage.setItem("@cloneTwitter:username", user['nick']);
      this.router.navigate(["feed"]);
    });
  }
}
