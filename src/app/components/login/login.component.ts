import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username: string): void {

    if (!username.length) return;

    localStorage.setItem('@cloneTwitter:username', username);
    
    this.router.navigate(['feed'])
  }

}
