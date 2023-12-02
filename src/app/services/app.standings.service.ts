import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataStanding from '../data/standingsResponses.json';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private url: string = 'https://v3.football.api-sports.io/standings';
  data: any = (dataStanding as any).default;

  constructor(private http: HttpClient) {}

  // getData(league: number) {
  //   const headers = new HttpHeaders({
  //     'x-rapidapi-key': '5f91ad32e599c6a073e98f8d2e7bbb67',
  //   });
  //   let params = new HttpParams().set('league', league).set('season', '2023');
  //   return this.http.get(this.url, { headers, params });
  // }

  getData(league: number) {
    return this.data[league];
  }
}
