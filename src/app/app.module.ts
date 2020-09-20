import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { GlobalConstants } from './global-constants';
import { StatsPageComponent } from './stats-page/stats-page.component';
import {CountdownModule} from 'ngx-countdown';
import {NgxTimerModule} from 'ngx-timer';

import { CountUpModule } from 'ngx-countup';





@NgModule({
  declarations: [
    AppComponent,
    RegisterTeamComponent,
    RegisterPlayerComponent,
    WelcomeComponent,
    LeaderboardComponent,
    StartComponent,
    GameComponent,
    StatsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,CountdownModule, NgxTimerModule
  ],
  providers: [GlobalConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
