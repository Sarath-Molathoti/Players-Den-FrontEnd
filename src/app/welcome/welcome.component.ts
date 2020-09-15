import { Component, OnInit } from '@angular/core';
export interface Team{
   teamName?: string;
   teamCaption?: string;
   //teamId?: number;
   teamScore?: number;

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
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
