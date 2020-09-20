import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Tournament } from '../welcome/welcome.component';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent implements OnInit {

  tournaments: Tournament[];
  tNumber : number = 0;
  tDateToSearch : Date;
  p : Tournament;
  q : Tournament[];
  total:boolean = true;
  showByNumber:boolean = false;
  showByDate: boolean = false;
  

  constructor(
    private gameData : GameDataService
  ) {
    gameData.getTournaments().subscribe(
      data=>{
        this.tournaments = data;
      }
    )
   }

  ngOnInit(): void {
  }

  getByNumber(){
    this.gameData.getTournamentByNumber(this.tNumber).subscribe(
      data=>{
        this.p = data;
        this.total = false;
        this.showByNumber = true;
      }
    )
  }

  getByDate(){
    this.gameData.getTournamentByDate(this.tDateToSearch).subscribe(
      data=>{
        this.q = data;
        this.total = false;
        this.showByDate = true;
      }
    )
  }
  

}
