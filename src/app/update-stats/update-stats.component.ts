import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stats',
  templateUrl: './update-stats.component.html',
  styleUrls: ['./update-stats.component.css']
})
export class UpdateStatsComponent implements OnInit {

  tournDate: Date;
  tournId: number;
  sample:number;
  numError: boolean = false;
  dateError: boolean = false;
  sucMessage:boolean = false;

  constructor(
    private gameData: GameDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveDetails(){
    if(!this.tournId){
      this.numError = true;
    }else if(!this.tournDate){
      this.dateError = true;
    }else{
      this.gameData.saveTournamentDetails1(this.tournId,this.tournDate,1).subscribe(
        data=>{
          this.sample = data;
          this.gameData.saveTournamentDetails2(1).subscribe(
            data=>{
              this.sample=data;
              this.sucMessage = true;
              this.router.navigate(['']); 
            }
          )
        }
      )
    }
     
  }

}
