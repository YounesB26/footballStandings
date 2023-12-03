import { Component, OnDestroy, OnInit } from '@angular/core';
import { StandingsService } from '../../services/footAPI.services';
import { I_Standings } from 'src/app/model/standings.model';
import { DataSharingService } from 'src/app/services/dataSharing.services';
import { constants } from 'src/app/constants/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standings',
  templateUrl: './app.standings.html',
})
export class Standings implements OnInit, OnDestroy {
  public dataStandings: I_Standings[] = [];
  leagues: { name: string; code: number }[] = constants.LEAGUES_TO_SHOW;
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
