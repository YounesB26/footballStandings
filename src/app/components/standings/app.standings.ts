import { Component } from '@angular/core';
import { StandingsService } from '../../services/footAPI.services';
import { I_Standings } from 'src/app/model/standings.model';

@Component({
  selector: 'app-standings',
  templateUrl: './app.standings.html',
})
export class Standings {
  public data?: I_Standings[]; //todo
  leagues: { name: string; code: number }[] = [
    { name: 'England', code: 39 },
    { name: 'Spain', code: 140 },
    { name: 'France', code: 61 },
    { name: 'Germany', code: 78 },
    { name: 'Italy', code: 135 },
  ];
  season: number = new Date().getFullYear();
  selectedLeague: number = 0;

  constructor(private st: StandingsService) {}

  ngOnInit() {}

  getStandings(leagueCode: number) {
    this.selectedLeague = leagueCode;
    this.st.getLeague(leagueCode, this.season).subscribe((data) => {
      this.data = data.response[0].league.standings[0];
      console.log(data);
    });
  }
}
