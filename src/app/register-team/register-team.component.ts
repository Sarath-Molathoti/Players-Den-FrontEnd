import { Component, OnInit } from '@angular/core';

import { TeamRegisterService } from '../services/team-register.service';
import { Router } from '@angular/router';
import { Team } from '../welcome/welcome.component';
import { GameDataService } from '../game-data.service';



@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  //  teamName = ""
  //  teamCaption = ""
  // team : Team
   team: Team  = {}
   nameError : boolean = false;
   dupMessage: boolean = false;
   succMessage : boolean = false;

   count:number = 0;
  constructor(
    private teamRegister : TeamRegisterService,
    private gameData : GameDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  saveTeam(){
    // this.team.teamName=this.teamName
    // this.team.teamCaption = this.teamCaption
    //console.log(this.teamCaption)
    if(!this.team.teamName){
      this.nameError = true;
      this.dupMessage = false;
      this.succMessage = false;
    }else{
      this.gameData.getTeamNameCount(this.team.teamName).subscribe(
        data=>{
          this.count = data;
          if(data>=1){
            this.dupMessage = true;this.succMessage = false;

          }else{
            this.team.teamScore = 0;
        this.teamRegister.createTeam(this.team).subscribe(
          data=>{
            this.succMessage = true;
            this.dupMessage = false;
            this.nameError = false;
            //this.router.navigate([''])
            this.count = 0 ;
          }
        )
          }
          
        }
      )
        }
      
      
    
  }

}
