import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, Player, Tournament } from './welcome/welcome.component';

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
  updateScore(player_name,player_value,player_score,player){
    return this.http.put<number>(`http://localhost:8080/${player_name}/${player_value}/${player_score}/`,player);
    //return this.score;
  }
  clearScores(player){
    return this.http.put<number>(`http://localhost:8080/clear_scores/`,player);
  }

  updateTeamScore(team_name,team_score,team){
    return this.http.put<number>(`http://localhost:8080/${team_name}/${team_score}/`,team);
  }

  getTeamScore(teamName){
    return this.http.get<number>(`http://localhost:8080/${teamName}/`);

  }

  clearTeamScores(sample){
    return this.http.put<number>(`http://localhost:8080/clear_team_scores/`,sample);
  }

  getTournaments(){
    return this.http.get<Tournament[]>(`http://localhost:8080/tournaments/`);

  }
  getTournamentByNumber(tournament_number){
     return this.http.get<Tournament>(`http://localhost:8080/${tournament_number}/detail/`);

   }
   getTournamentByDate(tournament_date){
    return this.http.get<Tournament[]>(`http://localhost:8080/${tournament_date}/tdetails/`);

  }
  
}
