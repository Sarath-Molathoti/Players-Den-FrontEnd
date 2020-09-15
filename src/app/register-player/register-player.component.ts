import { Component, OnInit } from '@angular/core';
import { Player } from '../welcome/welcome.component';
import { TeamRegisterService } from '../services/team-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent implements OnInit {

  player: Player = {}

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
    this.player.playerScore = 0;
    this.teamRegister.createPlayer(this.player).subscribe(
      data=>{
        this.router.navigate([''])

      }
    )
  }

}
