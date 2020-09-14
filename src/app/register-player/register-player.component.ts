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

  savePlayer(){
    this.player.player_score = 0;
    this.teamRegister.createPlayer(this.player).subscribe(
      data=>{
        this.router.navigate([''])

      }
    )
  }

}
