import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';


const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "register-team", component: RegisterTeamComponent},
  {path: "register-player", component: RegisterPlayerComponent},
  {path: "", component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
