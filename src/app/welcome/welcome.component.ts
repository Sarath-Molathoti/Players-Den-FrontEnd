import { Component, OnInit } from '@angular/core';
export interface Team{
   team_name?: string;
   team_caption?: string;
   //teamId?: number;
   team_score?: number;

}

export interface Player{
  player_name?: string;
  player_caption?: string;
  //teamId?: number;
  player_score?: number;
  player_age?: number;
  player_team_name?: string;

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
