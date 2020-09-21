import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { UpdateStatsComponent } from './update-stats/update-stats.component';


const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "stats", component: StatsPageComponent},
  {path: "start-game", component: StartComponent},
  {path: "update-stats", component:UpdateStatsComponent},
  {path: "game-page", component: GameComponent},
  {path: "leaderboard", component: LeaderboardComponent},
  {path: "register-team", component: RegisterTeamComponent},
  {path: "register-player", component: RegisterPlayerComponent},
  {path: "", component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
