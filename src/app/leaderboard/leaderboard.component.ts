import { Component, OnInit } from '@angular/core';
import { TeamRegisterService } from '../services/team-register.service';
import { Router } from '@angular/router';
import { Team } from '../welcome/welcome.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  teams : Team[]
  // i = 0;

  constructor(
    private teamRegister: TeamRegisterService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshLeaderboard();
  }
  refreshLeaderboard(){
    this.teamRegister.retrieveAllTeamScores().subscribe(
      response =>{
        //console.log(response);
        this.teams=response;
        this.teams.sort(function(a, b){
          return b.teamScore-a.teamScore;
      })
      }
    )
  }

}
