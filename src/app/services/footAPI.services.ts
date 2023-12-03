import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constants/constants';
import { Observable, tap, of } from 'rxjs';
import { I_StandingsResponse } from '../model/standings.model';
import { I_FixtureResponse } from '../model/fixtures.model';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private standings: { [leagueCode: string]: I_StandingsResponse } = {};

  constructor(private http: HttpClient) {}

  getLeague(
    leagueCode: number,
    season: number
  ): Observable<I_StandingsResponse> {
    const headers = new HttpHeaders({ 'x-rapidapi-key': constants.API_KEY });

    let params = new HttpParams()
      .set('league', leagueCode)
      .set('season', season);

    if (this.standings[leagueCode + '_' + season]) {
      return of(this.standings[leagueCode + '_' + season]);
    } else {
      return this.http
        .get<I_StandingsResponse>(constants.API_STANDING_URL, {
          headers,
          params,
        })
        .pipe(
          tap((data: I_StandingsResponse) => {
            this.standings[leagueCode + '_' + season] = data;
          })
        );
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  private fixtures: { [teamCode: number]: I_FixtureResponse } = {};
  constructor(private http: HttpClient) {}

  getFixtures(
    leagueCode: number,
    teamCode: number
  ): Observable<I_FixtureResponse> {
    const headers = new HttpHeaders({ 'x-rapidapi-key': constants.API_KEY });

    let params = new HttpParams()
      .set('league', leagueCode)
      .set('team', teamCode)
      .set('status', 'ft')
      .set('last', 10);

    if (this.fixtures[teamCode]) {
      return of(this.fixtures[teamCode]);
    } else {
      return this.http
        .get<I_FixtureResponse>(constants.API_FIXTURE_URL, {
          headers,
          params,
        })
        .pipe(
          tap((data: I_FixtureResponse) => {
            this.fixtures[teamCode] = data;
          })

        );
    }
  }
}
