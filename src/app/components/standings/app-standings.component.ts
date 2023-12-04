import { Component, OnDestroy, OnInit } from '@angular/core';
import { StandingsService } from '../../services/app-api.service';
import { I_Standings } from 'src/app/model/standings';
import { DataSharingService } from 'src/app/services/app-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standings',
  templateUrl: './app-standings.component.html',
  styleUrls : ['./app-standings.component.css']
})
export class Standings implements OnInit, OnDestroy {
  dataStandings: I_Standings[] = [];
  LEAGUES_TO_SHOW: { name: string; code: number }[] = [
    { name: 'England', code: 39 },
    { name: 'Spain', code: 140 },
    { name: 'France', code: 61 },
    { name: 'Germany', code: 78 },
    { name: 'Italy', code: 135 },
  ];

  leagues: { name: string; code: number }[] = this.LEAGUES_TO_SHOW;
  season: number = new Date().getFullYear();
  selectedLeague: number = 0;
  subscription: Subscription = Subscription.EMPTY;
  constructor(
    private st: StandingsService,
    private dataSave: DataSharingService
  ) {}

  ngOnInit() {
    this.selectedLeague = this.dataSave.getLeague();
    if (this.selectedLeague) {
      this.getStandings(this.selectedLeague);
    }
  }

  getStandings(leagueCode: number): void {
    this.dataSave.setLeague((this.selectedLeague = leagueCode));
    this.subscription = this.st
      .getLeague(leagueCode, this.season)
      .subscribe((data) => {
        if (data.response && data.response.length) {
          this.dataStandings = data.response[0].league.standings[0];
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
