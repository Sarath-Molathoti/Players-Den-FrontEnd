import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, Player } from '../welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class TeamRegisterService {

  constructor(
    private http: HttpClient
  ) { }

  createTeam(team){
    return this.http.post<Team>(`http://localhost:8080/teams/`,team);

  }
  createPlayer(player){
    return this.http.post<Player>(`http://localhost:8080/player/`,player);

  }
}
