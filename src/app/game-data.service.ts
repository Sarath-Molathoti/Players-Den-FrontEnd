import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, Player } from './welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(
    private http:HttpClient
  ) { }

  getTeams(){
    return this.http.get<Team[]>(`http://localhost:8080/get_random_teams/`);
  }
  getFirstTeamPlayers(teamName){
    return this.http.get<Player[]>(`http://localhost:8080/${teamName}/get_first_team_players/`);

  }
  
}
