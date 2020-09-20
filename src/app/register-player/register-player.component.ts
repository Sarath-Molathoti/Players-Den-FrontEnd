import { Component, OnInit } from '@angular/core';
import { Player } from '../welcome/welcome.component';
import { TeamRegisterService } from '../services/team-register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent implements OnInit {

  player: Player = {}
  ageError: boolean = false;
  agePError: boolean = false;
  pNameError: boolean = false;
  nameError: boolean = false;


  constructor(
    private teamRegister : TeamRegisterService,
    private router : Router
  ) { }



  ngOnInit(): void {
  }

  // public onFileChanged(event) {
  //       //Select File
  //       this.player.player_pic = event.target.files[0];
  //     }
  savePlayer(){
    if(!this.player.playerTeamName){
       this.pNameError = true;
    }else if(!this.player.playerName){
       this.nameError = true;
       this.pNameError = false;
    }
    else if(!this.player.playerAge){
      this.agePError = true;
      this.nameError = false;
       this.pNameError = false;
   }
    else if(this.player.playerAge<18){
       this.ageError = true;
    }else{
      this.player.playerScore = 0;
    this.teamRegister.createPlayer(this.player).subscribe(
      data=>{
        this.router.navigate([''])

      }
    )
    }
  }

}
