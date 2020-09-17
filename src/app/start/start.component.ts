import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Team, Player } from '../welcome/welcome.component';
import { GlobalConstants } from '../global-constants';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  gamesCounter : number;

  randomTeams : Team[]
  firstTeamPlayers : Player[]
  secondTeamPlayers : Player[]
  thirdTeamPlayers : Player[]
  clickedGame1:boolean ;
  clickedGame2:boolean ;
  clickedGame3:boolean ;
  clickedGame4:boolean ;
  clickedGame5:boolean ;
  

  showBody:boolean = false;
  showBody2: boolean = false;

  firstRoundResult : boolean =  false;
  secondRoundResult : boolean = false;


  //disabling inputs
  player11Input: boolean = true;
  player12Input: boolean = false;
  player21Input: boolean = false;
  player22Input: boolean = false;
  player31Input: boolean = false;
  player32Input: boolean = false;

  player11Value: number = 0;
  player12Value: number = 0;
  player21Value: number = 0;
  player22Value: number = 0;
  player31Value: number = 0;
  player32Value: number = 0;

  player11Score: number = 0;
  player12Score: number = 0;
  player21Score: number = 0;
  player22Score: number = 0;
  player31Score: number = 0;
  player32Score: number = 0;

  player11message: boolean = false;
  player12message: boolean = false;
  player21message: boolean = false;
  player22message: boolean = false;
  player31message: boolean = false;
  player32message: boolean = false;

  prev1: number = 0;
  prev2: number = 0;
  prev3: number = 0;

  newTournament : boolean = false;

  //to store number of turns
  counter: number = 0;

  sample : number;

  now: string
  constructor(
    private gameData : GameDataService,
    public global : GlobalConstants
  ) {
    this.gamesCounter = global.gameCounter
    if(this.gamesCounter==0){
      this.newTournament = false;
      this.clickedGame1 = true;
      this.clickedGame2 = true;
      this.clickedGame3 = true;
      this.clickedGame4 = true;
      this.clickedGame5 = true;
     }
     else if(this.gamesCounter==1){
      this.clickedGame1 = false;
      this.clickedGame2 = true;
      this.clickedGame3 = true;
      this.clickedGame4 = true;
      this.clickedGame5 = true;
     }
     else if(this.gamesCounter==2){
      this.clickedGame1 = false;
      this.clickedGame2 = false;
      this.clickedGame3 = true;
      this.clickedGame4 = true;
      this.clickedGame5 = true;
     }
     else if(this.gamesCounter==3){
      this.clickedGame1 = false;
      this.clickedGame2 = false;
      this.clickedGame3 = false;
      this.clickedGame4 = true;
      this.clickedGame5 = true;
     }
     else if(this.gamesCounter==4){
      this.clickedGame1 = false;
      this.clickedGame2 = false;
      this.clickedGame3 = false;
      this.clickedGame4 = false;
      this.clickedGame5 = true;
     }else{
       global.gameCounter = 0;
       this.newTournament = true;
     }
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
    this.gameData.clearScores("clear").subscribe(
      data=>{
         
      }
    )
   }

  ngOnInit(): void {
  }
  
  startNewTournament(){
    window.location.reload();
  }


  selectThings(){
    this.gamesCounter = this.gamesCounter + 1;
    this.global.gameCounter = this.gamesCounter;
    this.clickedGame1 = false;
    this.clickedGame2 = false;
    this.clickedGame3 = false;
    this.clickedGame4 = false;
    this.clickedGame5 = false;

    this.showBody = true;
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

  player11Click(){
    this.gameData.updateScore(this.firstTeamPlayers[0].playerName,this.player11Value,this.player11Score,this.firstTeamPlayers[0]).subscribe(
      data=>{
        this.player11Score = data;
        this.firstTeamPlayers[0].playerScore = data;
        this.randomTeams[0].teamScore = data;

        this.gameData.updateTeamScore(this.randomTeams[0].teamName,this.randomTeams[0].teamScore,this.randomTeams[0]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
    this.player11Input = false;
    this.player21Input = true;
    
  }
  // player12Click(){
  //   this.gameData.updateScore(this.firstTeamPlayers[1].playerName,this.player12Value,this.player12Score,this.firstTeamPlayers[1]).subscribe(
  //     data=>{
  //       this.player12Score = data;
  //       this.firstTeamPlayers[1].playerScore = data;
  //     }
  //   )
  //   this.player12Input = false;
  //   this.player22Input = true;
  // }
  player21Click(){
    this.gameData.updateScore(this.secondTeamPlayers[0].playerName,this.player21Value,this.player21Score,this.secondTeamPlayers[0]).subscribe(
      data=>{
        this.player21Score = data;
        this.secondTeamPlayers[0].playerScore = data;
        this.randomTeams[1].teamScore = data;

        this.gameData.updateTeamScore(this.randomTeams[1].teamName,this.randomTeams[1].teamScore,this.randomTeams[1]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
    this.player21Input = false;
    this.player31Input = true;
  }
  // player22Click(){
  //   this.gameData.updateScore(this.secondTeamPlayers[1].playerName,this.player22Value,this.player22Score,this.secondTeamPlayers[1]).subscribe(
  //     data=>{
  //       this.player22Score = data;
  //       this.secondTeamPlayers[1].playerScore = data;
  //     }
  //   )
  //   this.player22Input = false;
  //   this.player32Input = true;
  // }
  player31Click(){
    this.gameData.updateScore(this.thirdTeamPlayers[0].playerName,this.player31Value,this.player31Score,this.thirdTeamPlayers[0]).subscribe(
      data=>{
        this.player31Score = data;
        this.thirdTeamPlayers[0].playerScore = data;
        this.randomTeams[2].teamScore = data;

        this.gameData.updateTeamScore(this.randomTeams[2].teamName,this.randomTeams[2].teamScore,this.randomTeams[2]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
     this.counter = this.counter + 1;
    // //when the first round ends
    if(this.counter==3){
      //disable all input fields
      this.player11Input = false;
      this.player12Input = false;
      this.player21Input = false;
      this.player22Input = false;
      this.player31Input = false;
      this.player32Input = false;

      // this.gameData.updateTeamScore()

      //updating team scores at round 1
      // this.randomTeams[0].teamScore = this.player11Score;
      // this.randomTeams[1].teamScore = this.player21Score;
      // this.randomTeams[2].teamScore = this.player31Score;

      
      
      //finding highest score at round 1
      if(this.randomTeams[0].teamScore > this.randomTeams[1].teamScore){
         if(this.randomTeams[0].teamScore > this.randomTeams[2].teamScore){
          this.clickedGame1 = false;
          this.showBody = false;
          this.player11message = true;
          this.firstRoundResult = true
         }else{
          this.clickedGame1 = false;
          this.showBody = false;
          this.player31message = true;
          this.firstRoundResult = true
         }
      }else{
        if(this.randomTeams[1].teamScore > this.randomTeams[2].teamScore){
          this.clickedGame1 = false;
          this.showBody = false;
          this.player21message = true;
          this.firstRoundResult = true;
        }
        else{
          this.clickedGame1 = false;
          this.showBody = false;
          this.player31message = true;
          this.firstRoundResult = true;
        }
      }
    }else{
    this.player31Input = false;
    this.player11Input = true;
   }
  }

  startSecondRound(){
    this.player11message = false;
    this.player12message = false;
    this.player21message = false;
    this.player22message = false;
    this.player31message = false;
    this.player32message = false;
    this.firstRoundResult = false;
    this.showBody2 = true;
    this.player12Input = true;
    this.counter = 0;

  }

  player12Click(){
    this.gameData.updateScore(this.firstTeamPlayers[1].playerName,this.player12Value,this.player12Score,this.firstTeamPlayers[1]).subscribe(
      data=>{
        this.player12Score = data;
        this.firstTeamPlayers[1].playerScore = data;
        this.randomTeams[0].teamScore = ((data + this.randomTeams[0].teamScore) - this.prev1);
        this.prev1 = data;
        this.gameData.updateTeamScore(this.randomTeams[0].teamName,this.randomTeams[0].teamScore,this.randomTeams[0]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
    this.player12Input = false;
    this.player22Input = true;
  }

  player22Click(){
    this.gameData.updateScore(this.secondTeamPlayers[1].playerName,this.player22Value,this.player22Score,this.secondTeamPlayers[1]).subscribe(
      data=>{
        this.player22Score = data;
        this.secondTeamPlayers[1].playerScore = data;
        this.randomTeams[1].teamScore = ((data + this.randomTeams[1].teamScore) - this.prev2);
        this.prev2 = data;
        this.gameData.updateTeamScore(this.randomTeams[1].teamName,this.randomTeams[1].teamScore,this.randomTeams[1]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
    this.player22Input = false;
    this.player32Input = true;
  }

  player32Click(){
    this.gameData.updateScore(this.thirdTeamPlayers[1].playerName,this.player32Value,this.player32Score,this.thirdTeamPlayers[1]).subscribe(
      data=>{
        this.player32Score = data;
        this.thirdTeamPlayers[1].playerScore = data;
        this.randomTeams[2].teamScore = ((data + this.randomTeams[2].teamScore) - this.prev3);
        this.prev3 = data
        this.gameData.updateTeamScore(this.randomTeams[2].teamName,this.randomTeams[2].teamScore,this.randomTeams[2]).subscribe(
          data=>{
            this.sample = data;
          }
        )
      }
    )
    this.counter = this.counter + 1;
    if(this.counter == 3){
      this.player12Input = false;
      this.player22Input = false;
      this.player32Input = false;
 
      //finding highest score at round 2
      if(this.randomTeams[0].teamScore > this.randomTeams[1].teamScore){
         if(this.randomTeams[0].teamScore > this.randomTeams[2].teamScore){
          this.clickedGame1 = false;
          this.showBody = false;
          this.showBody2 = false;
          this.player12message = true;
          this.secondRoundResult = true;
         }else{
          this.clickedGame1 = false;
          this.showBody = false;
          this.showBody2 = false;
          this.player32message = true;
          this.secondRoundResult = true;
         }
      }else{
        if(this.randomTeams[1].teamScore > this.randomTeams[2].teamScore){
          this.clickedGame1 = false;
          this.showBody = false;
          this.showBody2 = false;
          this.player22message = true;
          this.secondRoundResult = true;
        }
        else{
          this.clickedGame1 = false;
          this.showBody = false;
          this.showBody2 = false;
          this.player32message = true;
          this.secondRoundResult = true;
        }
      }
    }else{
      this.player32Input = false;
      this.player12Input = true;
    }
    
  }

  

}




  


