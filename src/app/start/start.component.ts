import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Team, Player } from '../welcome/welcome.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  randomTeams : Team[]
  firstTeamPlayers : Player[]
  secondTeamPlayers : Player[]
  thirdTeamPlayers : Player[]
  clicked = false;




  constructor(
    private gameData : GameDataService
  ) { }

  ngOnInit(): void {
  }

  selectThings(){
    clicked : false
    this.selectTeams();
    // this.getFirstTeamUsers(this.randomTeams[0].teamName);
  }
  // getFirstTeamUsers(teamName: string) {
  //   this.gameData.getFirstTeamPlayers(teamName).subscribe(
  //     data=>{
  //       this.firstTeamPlayers=data;
  //     }
  //   )
  // }

  selectTeams(){
    this.gameData.getTeams().subscribe(
      data=>{
        this.randomTeams = data;
        this.gameData.getFirstTeamPlayers(this.randomTeams[0].teamName).subscribe(
          data=>{
            this.firstTeamPlayers=data;
            this.gameData.getFirstTeamPlayers(this.randomTeams[1].teamName).subscribe(
              data=>{
                this.secondTeamPlayers=data;
                this.gameData.getFirstTeamPlayers(this.randomTeams[2].teamName).subscribe(
                  data=>{
                    this.thirdTeamPlayers=data;
                  }
                )
              }
            )
          }
        )
      }
    )
  }

  

}
