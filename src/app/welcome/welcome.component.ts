import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Team{
   teamName?: string;
   teamCaption?: string;
   //teamId?: number;
   teamScore?: number;
   players?: Player[];

}

export interface Player{
  playerName?: string;
  playerCaption?: string;
  //teamId?: number;
  playerScore?: number;
  playerAge?: number;
  playerTeamName?: string;
 // player_pic?: File;

}

export interface Tournament{
  tId?: number;
  tDate?: Date;
  tDetails?: History[];
  
}
export interface History{
  hId?: number;
  tHistoryId?: number;
  tHistoryTeam?: string;
  tHistoryScore?: number;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  interval;
  time =  new Date(null);
  


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  goToRegisterTeam(){
    this.router.navigate(['register-team']);
  }
  goToRegisterPlayer(){
    this.router.navigate(['register-player']);
  }
  goToLeaderBoard(){
    this.router.navigate(['leaderboard']);
  }
  goToTournament(){
    this.router.navigate(['start-game']);
  }
  goToStats(){
    this.router.navigate(['stats']);
  }

  // startTimer(){
  //   this.interval = setInterval(()=>{
  //     this.time.setSeconds(this.time.getSeconds() + 1);
  //   },1000)
  // }
}
