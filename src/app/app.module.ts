import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { FeedComponent } from "./components/feed/feed.component";
import { NewTweetComponent } from "./components/new-tweet/new-tweet.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { CardProfileComponent } from "./components/card-profile/card-profile.component";
import { ModalCommentComponent } from "./components/modal-comment/modal-comment.component";

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FeedComponent,
    NewTweetComponent,
    NavBarComponent,
    LoginComponent,
    CardProfileComponent,
    ModalCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
