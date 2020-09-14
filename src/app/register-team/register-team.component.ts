import { Component, OnInit } from '@angular/core';

import { TeamRegisterService } from '../services/team-register.service';
import { Router } from '@angular/router';
import { Team } from '../welcome/welcome.component';



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

  constructor(
    private teamRegister : TeamRegisterService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  saveTeam(){
    // this.team.teamName=this.teamName
    // this.team.teamCaption = this.teamCaption
    //console.log(this.teamCaption)
    this.team.team_score = 0;
    this.teamRegister.createTeam(this.team).subscribe(
      data=>{
        this.router.navigate([''])

      }
    )
  }

}
