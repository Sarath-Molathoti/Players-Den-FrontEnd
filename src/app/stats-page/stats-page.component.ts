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
  tByNumberBtn: boolean = true;
  tByDateBtn: boolean = true;
  tByNumberIp: boolean = false;
  tByDateIp: boolean = false;

  tAll: boolean = true;

  

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
    this.total = false;
    this.gameData.getTournamentByNumber(this.tNumber).subscribe(
      data=>{
        this.p = data;
        this.total = false;
        this.showByNumber = true;
      }
    )
  }

  getByDate(){
    this.total = false;
    this.gameData.getTournamentByDate(this.tDateToSearch).subscribe(
      data=>{
        this.q = data;
        this.total = false;
        this.showByDate = true;
      }
    )
  }

  numberBtn(){
    this.total = false;
    this.tByNumberIp = true;
    this.tByDateIp = false;
    this.showByDate = false;


  }
  dateBtn(){
    this.total = false;
    this.tByDateIp = true;
    this.tByNumberIp = false;
    this.showByNumber = false;


  }
  allBtn(){
    this.total = true;
    this.tByDateIp = false;
    this.tByNumberIp = false;
    this.showByNumber = false;
    this.showByDate = false;


  }
  

}
