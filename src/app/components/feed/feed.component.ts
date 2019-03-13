import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: []
  user: {}
  
  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.getUser();
  }

  getFeed(): void {
    this.tweetService.getFeed().subscribe(feed => this.feed=feed);
  }

  getUser(): void {
    var nick = localStorage.getItem('@cloneTwitter:username');
    this.tweetService.getUser(nick).subscribe(user => (this.user = user[0], this.getFeed()));
  }

}
