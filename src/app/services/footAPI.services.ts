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

    /* FORCAGE*********************/
    this.standings = {
      '39_2023': {
        get: 'standings',
        parameters: {
          league: 39,
          season: 2023,
        },
        errors: [],
        results: 1,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 42,
                      name: 'Arsenal',
                      logo: 'https://media-4.api-sports.io/football/teams/42.png',
                    },
                    points: 30,
                    goalsDiff: 17,
                    group: 'Premier League',
                    form: 'WWLWD',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 9,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 27,
                        against: 10,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 18,
                        against: 7,
                      },
                    },
                    away: {
                      played: 6,
                      win: 4,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 9,
                        against: 3,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 2,
                    team: {
                      id: 50,
                      name: 'Manchester City',
                      logo: 'https://media-4.api-sports.io/football/teams/50.png',
                    },
                    points: 29,
                    goalsDiff: 20,
                    group: 'Premier League',
                    form: 'DDWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 9,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 33,
                        against: 13,
                      },
                    },
                    home: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 17,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 4,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 16,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 3,
                    team: {
                      id: 40,
                      name: 'Liverpool',
                      logo: 'https://media-4.api-sports.io/football/teams/40.png',
                    },
                    points: 28,
                    goalsDiff: 17,
                    group: 'Premier League',
                    form: 'DWDWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 8,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 28,
                        against: 11,
                      },
                    },
                    home: {
                      played: 6,
                      win: 6,
                      draw: 0,
                      lose: 0,
                      goals: {
                        for: 17,
                        against: 2,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 11,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 4,
                    team: {
                      id: 66,
                      name: 'Aston Villa',
                      logo: 'https://media-4.api-sports.io/football/teams/66.png',
                    },
                    points: 28,
                    goalsDiff: 13,
                    group: 'Premier League',
                    form: 'WWLWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 9,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 31,
                        against: 18,
                      },
                    },
                    home: {
                      played: 6,
                      win: 6,
                      draw: 0,
                      lose: 0,
                      goals: {
                        for: 23,
                        against: 5,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 8,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 5,
                    team: {
                      id: 47,
                      name: 'Tottenham',
                      logo: 'https://media-4.api-sports.io/football/teams/47.png',
                    },
                    points: 26,
                    goalsDiff: 8,
                    group: 'Premier League',
                    form: 'LLLWW',
                    status: 'same',
                    description: 'Promotion - Europa League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 8,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 25,
                        against: 17,
                      },
                    },
                    home: {
                      played: 6,
                      win: 4,
                      draw: 0,
                      lose: 2,
                      goals: {
                        for: 10,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 4,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 15,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 6,
                    team: {
                      id: 33,
                      name: 'Manchester United',
                      logo: 'https://media-4.api-sports.io/football/teams/33.png',
                    },
                    points: 24,
                    goalsDiff: 0,
                    group: 'Premier League',
                    form: 'WWWLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 8,
                      draw: 0,
                      lose: 5,
                      goals: {
                        for: 16,
                        against: 16,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 0,
                      lose: 3,
                      goals: {
                        for: 8,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 4,
                      draw: 0,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 6,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 7,
                    team: {
                      id: 34,
                      name: 'Newcastle',
                      logo: 'https://media-4.api-sports.io/football/teams/34.png',
                    },
                    points: 23,
                    goalsDiff: 17,
                    group: 'Premier League',
                    form: 'WLWDW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 7,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 31,
                        against: 14,
                      },
                    },
                    home: {
                      played: 7,
                      win: 6,
                      draw: 0,
                      lose: 1,
                      goals: {
                        for: 18,
                        against: 4,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 13,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 8,
                    team: {
                      id: 51,
                      name: 'Brighton',
                      logo: 'https://media-4.api-sports.io/football/teams/51.png',
                    },
                    points: 22,
                    goalsDiff: 5,
                    group: 'Premier League',
                    form: 'WDDDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 4,
                      lose: 3,
                      goals: {
                        for: 28,
                        against: 23,
                      },
                    },
                    home: {
                      played: 7,
                      win: 3,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 15,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 13,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 9,
                    team: {
                      id: 48,
                      name: 'West Ham',
                      logo: 'https://media-4.api-sports.io/football/teams/48.png',
                    },
                    points: 20,
                    goalsDiff: 0,
                    group: 'Premier League',
                    form: 'WWLLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 23,
                        against: 23,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 11,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 12,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 10,
                    team: {
                      id: 49,
                      name: 'Chelsea',
                      logo: 'https://media-4.api-sports.io/football/teams/49.png',
                    },
                    points: 16,
                    goalsDiff: 2,
                    group: 'Premier League',
                    form: 'LDWLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 4,
                      lose: 5,
                      goals: {
                        for: 22,
                        against: 20,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 11,
                      },
                    },
                    away: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 12,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 11,
                    team: {
                      id: 55,
                      name: 'Brentford',
                      logo: 'https://media-4.api-sports.io/football/teams/55.png',
                    },
                    points: 16,
                    goalsDiff: 1,
                    group: 'Premier League',
                    form: 'LLWWW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 4,
                      lose: 5,
                      goals: {
                        for: 19,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 12,
                        against: 11,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 7,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 12,
                    team: {
                      id: 39,
                      name: 'Wolves',
                      logo: 'https://media-4.api-sports.io/football/teams/39.png',
                    },
                    points: 15,
                    goalsDiff: -5,
                    group: 'Premier League',
                    form: 'LWLDW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 18,
                        against: 23,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 9,
                        against: 12,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 9,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 13,
                    team: {
                      id: 52,
                      name: 'Crystal Palace',
                      logo: 'https://media-4.api-sports.io/football/teams/52.png',
                    },
                    points: 15,
                    goalsDiff: -5,
                    group: 'Premier League',
                    form: 'LLWLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 13,
                        against: 18,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 14,
                    team: {
                      id: 36,
                      name: 'Fulham',
                      logo: 'https://media-4.api-sports.io/football/teams/36.png',
                    },
                    points: 15,
                    goalsDiff: -9,
                    group: 'Premier League',
                    form: 'WLLDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 13,
                        against: 22,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 0,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 15,
                    team: {
                      id: 65,
                      name: 'Nottingham Forest',
                      logo: 'https://media-4.api-sports.io/football/teams/65.png',
                    },
                    points: 13,
                    goalsDiff: -5,
                    group: 'Premier League',
                    form: 'LLWLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 4,
                      lose: 6,
                      goals: {
                        for: 16,
                        against: 21,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 10,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 6,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 16,
                    team: {
                      id: 35,
                      name: 'Bournemouth',
                      logo: 'https://media-4.api-sports.io/football/teams/35.png',
                    },
                    points: 12,
                    goalsDiff: -14,
                    group: 'Premier League',
                    form: 'WWLWL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 3,
                      lose: 7,
                      goals: {
                        for: 14,
                        against: 28,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 8,
                        against: 18,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 17,
                    team: {
                      id: 1359,
                      name: 'Luton',
                      logo: 'https://media-4.api-sports.io/football/teams/1359.png',
                    },
                    points: 9,
                    goalsDiff: -11,
                    group: 'Premier League',
                    form: 'WLDLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 3,
                      lose: 8,
                      goals: {
                        for: 12,
                        against: 23,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 6,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 18,
                    team: {
                      id: 62,
                      name: 'Sheffield Utd',
                      logo: 'https://media-4.api-sports.io/football/teams/62.png',
                    },
                    points: 5,
                    goalsDiff: -23,
                    group: 'Premier League',
                    form: 'LDWLL',
                    status: 'same',
                    description: 'Relegation - Championship',
                    all: {
                      played: 13,
                      win: 1,
                      draw: 2,
                      lose: 10,
                      goals: {
                        for: 11,
                        against: 34,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 7,
                        against: 19,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 4,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 19,
                    team: {
                      id: 45,
                      name: 'Everton',
                      logo: 'https://media-4.api-sports.io/football/teams/45.png',
                    },
                    points: 4,
                    goalsDiff: -6,
                    group: 'Premier League',
                    form: 'LWDWL',
                    status: 'same',
                    description: 'Relegation - Championship',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 2,
                      lose: 7,
                      goals: {
                        for: 14,
                        against: 20,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 5,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 9,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 20,
                    team: {
                      id: 44,
                      name: 'Burnley',
                      logo: 'https://media-4.api-sports.io/football/teams/44.png',
                    },
                    points: 4,
                    goalsDiff: -22,
                    group: 'Premier League',
                    form: 'LLLLL',
                    status: 'same',
                    description: 'Relegation - Championship',
                    all: {
                      played: 13,
                      win: 1,
                      draw: 1,
                      lose: 11,
                      goals: {
                        for: 10,
                        against: 32,
                      },
                    },
                    home: {
                      played: 7,
                      win: 0,
                      draw: 0,
                      lose: 7,
                      goals: {
                        for: 5,
                        against: 20,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 12,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      },
      '140_2023': {
        get: 'standings',
        parameters: {
          league: 140,
          season: 2023,
        },
        errors: [],
        results: 1,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            league: {
              id: 140,
              name: 'La Liga',
              country: 'Spain',
              logo: 'https://media-4.api-sports.io/football/leagues/140.png',
              flag: 'https://media-4.api-sports.io/flags/es.svg',
              season: 2023,
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 547,
                      name: 'Girona',
                      logo: 'https://media-4.api-sports.io/football/teams/547.png',
                    },
                    points: 38,
                    goalsDiff: 16,
                    group: 'Primera División',
                    form: 'WDWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 15,
                      win: 12,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 34,
                        against: 18,
                      },
                    },
                    home: {
                      played: 8,
                      win: 6,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 18,
                        against: 10,
                      },
                    },
                    away: {
                      played: 7,
                      win: 6,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 16,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 2,
                    team: {
                      id: 541,
                      name: 'Real Madrid',
                      logo: 'https://media-4.api-sports.io/football/teams/541.png',
                    },
                    points: 35,
                    goalsDiff: 22,
                    group: 'Primera División',
                    form: 'WWDWD',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 14,
                      win: 11,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 31,
                        against: 9,
                      },
                    },
                    home: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 15,
                        against: 3,
                      },
                    },
                    away: {
                      played: 8,
                      win: 6,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 16,
                        against: 6,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 3,
                    team: {
                      id: 530,
                      name: 'Atletico Madrid',
                      logo: 'https://media-4.api-sports.io/football/teams/530.png',
                    },
                    points: 31,
                    goalsDiff: 18,
                    group: 'Primera División',
                    form: 'WWLWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 10,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 30,
                        against: 12,
                      },
                    },
                    home: {
                      played: 7,
                      win: 7,
                      draw: 0,
                      lose: 0,
                      goals: {
                        for: 17,
                        against: 7,
                      },
                    },
                    away: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 13,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 4,
                    team: {
                      id: 529,
                      name: 'Barcelona',
                      logo: 'https://media-4.api-sports.io/football/teams/529.png',
                    },
                    points: 31,
                    goalsDiff: 13,
                    group: 'Primera División',
                    form: 'DWWLW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 14,
                      win: 9,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 27,
                        against: 14,
                      },
                    },
                    home: {
                      played: 7,
                      win: 6,
                      draw: 0,
                      lose: 1,
                      goals: {
                        for: 15,
                        against: 5,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 4,
                      lose: 0,
                      goals: {
                        for: 12,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 5,
                    team: {
                      id: 531,
                      name: 'Athletic Club',
                      logo: 'https://media-4.api-sports.io/football/teams/531.png',
                    },
                    points: 25,
                    goalsDiff: 8,
                    group: 'Primera División',
                    form: 'DWWDL',
                    status: 'same',
                    description: 'Promotion - Europa League (Group Stage: )',
                    all: {
                      played: 14,
                      win: 7,
                      draw: 4,
                      lose: 3,
                      goals: {
                        for: 26,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 18,
                        against: 11,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 7,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 6,
                    team: {
                      id: 548,
                      name: 'Real Sociedad',
                      logo: 'https://media-4.api-sports.io/football/teams/548.png',
                    },
                    points: 25,
                    goalsDiff: 8,
                    group: 'Primera División',
                    form: 'WWLDW',
                    status: 'same',
                    description:
                      'Promotion - Europa Conference League (Qualification: )',
                    all: {
                      played: 14,
                      win: 7,
                      draw: 4,
                      lose: 3,
                      goals: {
                        for: 25,
                        against: 17,
                      },
                    },
                    home: {
                      played: 8,
                      win: 5,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 17,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 7,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 7,
                    team: {
                      id: 543,
                      name: 'Real Betis',
                      logo: 'https://media-4.api-sports.io/football/teams/543.png',
                    },
                    points: 24,
                    goalsDiff: 2,
                    group: 'Primera División',
                    form: 'WDWWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 6,
                      draw: 6,
                      lose: 2,
                      goals: {
                        for: 18,
                        against: 16,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 10,
                        against: 2,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 8,
                    team: {
                      id: 534,
                      name: 'Las Palmas',
                      logo: 'https://media-4.api-sports.io/football/teams/534.png',
                    },
                    points: 21,
                    goalsDiff: 0,
                    group: 'Primera División',
                    form: 'WLDWW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 15,
                      win: 6,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 13,
                        against: 13,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 8,
                        against: 4,
                      },
                    },
                    away: {
                      played: 8,
                      win: 2,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 5,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 9,
                    team: {
                      id: 728,
                      name: 'Rayo Vallecano',
                      logo: 'https://media-4.api-sports.io/football/teams/728.png',
                    },
                    points: 19,
                    goalsDiff: -2,
                    group: 'Primera División',
                    form: 'DLDDW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 4,
                      draw: 7,
                      lose: 3,
                      goals: {
                        for: 16,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 9,
                        against: 15,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 7,
                        against: 3,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 10,
                    team: {
                      id: 532,
                      name: 'Valencia',
                      logo: 'https://media-4.api-sports.io/football/teams/532.png',
                    },
                    points: 19,
                    goalsDiff: -3,
                    group: 'Primera División',
                    form: 'LDLWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 15,
                      win: 5,
                      draw: 4,
                      lose: 6,
                      goals: {
                        for: 17,
                        against: 20,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 3,
                      },
                    },
                    away: {
                      played: 8,
                      win: 1,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 9,
                        against: 17,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 11,
                    team: {
                      id: 546,
                      name: 'Getafe',
                      logo: 'https://media-4.api-sports.io/football/teams/546.png',
                    },
                    points: 19,
                    goalsDiff: -3,
                    group: 'Primera División',
                    form: 'LWDWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 15,
                      win: 4,
                      draw: 7,
                      lose: 4,
                      goals: {
                        for: 17,
                        against: 20,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 3,
                      lose: 0,
                      goals: {
                        for: 8,
                        against: 4,
                      },
                    },
                    away: {
                      played: 8,
                      win: 0,
                      draw: 4,
                      lose: 4,
                      goals: {
                        for: 9,
                        against: 16,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 12,
                    team: {
                      id: 533,
                      name: 'Villarreal',
                      logo: 'https://media-4.api-sports.io/football/teams/533.png',
                    },
                    points: 15,
                    goalsDiff: -4,
                    group: 'Primera División',
                    form: 'WLLWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 4,
                      draw: 3,
                      lose: 7,
                      goals: {
                        for: 21,
                        against: 25,
                      },
                    },
                    home: {
                      played: 8,
                      win: 2,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 14,
                        against: 16,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 7,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 13,
                    team: {
                      id: 542,
                      name: 'Alaves',
                      logo: 'https://media-4.api-sports.io/football/teams/542.png',
                    },
                    points: 15,
                    goalsDiff: -5,
                    group: 'Primera División',
                    form: 'WLWLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 4,
                      draw: 3,
                      lose: 7,
                      goals: {
                        for: 14,
                        against: 19,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 10,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 4,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 14,
                    team: {
                      id: 727,
                      name: 'Osasuna',
                      logo: 'https://media-4.api-sports.io/football/teams/727.png',
                    },
                    points: 14,
                    goalsDiff: -8,
                    group: 'Primera División',
                    form: 'LDLLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 4,
                      draw: 2,
                      lose: 8,
                      goals: {
                        for: 16,
                        against: 24,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 11,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 0,
                      lose: 4,
                      goals: {
                        for: 10,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 15,
                    team: {
                      id: 536,
                      name: 'Sevilla',
                      logo: 'https://media-4.api-sports.io/football/teams/536.png',
                    },
                    points: 12,
                    goalsDiff: 0,
                    group: 'Primera División',
                    form: 'LDDDD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 6,
                      lose: 5,
                      goals: {
                        for: 19,
                        against: 19,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 12,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 16,
                    team: {
                      id: 724,
                      name: 'Cadiz',
                      logo: 'https://media-4.api-sports.io/football/teams/724.png',
                    },
                    points: 11,
                    goalsDiff: -10,
                    group: 'Primera División',
                    form: 'DLLDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 2,
                      draw: 5,
                      lose: 7,
                      goals: {
                        for: 11,
                        against: 21,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 7,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 4,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 17,
                    team: {
                      id: 798,
                      name: 'Mallorca',
                      logo: 'https://media-4.api-sports.io/football/teams/798.png',
                    },
                    points: 10,
                    goalsDiff: -7,
                    group: 'Primera División',
                    form: 'DLLDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 1,
                      draw: 7,
                      lose: 6,
                      goals: {
                        for: 13,
                        against: 20,
                      },
                    },
                    home: {
                      played: 6,
                      win: 0,
                      draw: 5,
                      lose: 1,
                      goals: {
                        for: 4,
                        against: 5,
                      },
                    },
                    away: {
                      played: 8,
                      win: 1,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 9,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 18,
                    team: {
                      id: 538,
                      name: 'Celta Vigo',
                      logo: 'https://media-4.api-sports.io/football/teams/538.png',
                    },
                    points: 8,
                    goalsDiff: -10,
                    group: 'Primera División',
                    form: 'DLDLL',
                    status: 'same',
                    description: 'Relegation - LaLiga2',
                    all: {
                      played: 14,
                      win: 1,
                      draw: 5,
                      lose: 8,
                      goals: {
                        for: 14,
                        against: 24,
                      },
                    },
                    home: {
                      played: 7,
                      win: 0,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 11,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 10,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 19,
                    team: {
                      id: 715,
                      name: 'Granada CF',
                      logo: 'https://media-4.api-sports.io/football/teams/715.png',
                    },
                    points: 7,
                    goalsDiff: -14,
                    group: 'Primera División',
                    form: 'LDLLL',
                    status: 'same',
                    description: 'Relegation - LaLiga2',
                    all: {
                      played: 14,
                      win: 1,
                      draw: 4,
                      lose: 9,
                      goals: {
                        for: 19,
                        against: 33,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 11,
                        against: 15,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 1,
                      lose: 6,
                      goals: {
                        for: 8,
                        against: 18,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 20,
                    team: {
                      id: 723,
                      name: 'Almeria',
                      logo: 'https://media-4.api-sports.io/football/teams/723.png',
                    },
                    points: 3,
                    goalsDiff: -21,
                    group: 'Primera División',
                    form: 'LLLLL',
                    status: 'same',
                    description: 'Relegation - LaLiga2',
                    all: {
                      played: 14,
                      win: 0,
                      draw: 3,
                      lose: 11,
                      goals: {
                        for: 16,
                        against: 37,
                      },
                    },
                    home: {
                      played: 7,
                      win: 0,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 10,
                        against: 18,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 1,
                      lose: 6,
                      goals: {
                        for: 6,
                        against: 19,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      },
      '61_2023': {
        get: 'standings',
        parameters: {
          league: 61,
          season: 2023,
        },
        errors: [],
        results: 1,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            league: {
              id: 61,
              name: 'Ligue 1',
              country: 'France',
              logo: 'https://media-4.api-sports.io/football/leagues/61.png',
              flag: 'https://media-4.api-sports.io/flags/fr.svg',
              season: 2023,
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 85,
                      name: 'Paris Saint Germain',
                      logo: 'https://media-4.api-sports.io/football/teams/85.png',
                    },
                    points: 30,
                    goalsDiff: 23,
                    group: 'Ligue 1',
                    form: 'WWWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 9,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 34,
                        against: 11,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 20,
                        against: 6,
                      },
                    },
                    away: {
                      played: 6,
                      win: 4,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 14,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 2,
                    team: {
                      id: 84,
                      name: 'Nice',
                      logo: 'https://media-4.api-sports.io/football/teams/84.png',
                    },
                    points: 29,
                    goalsDiff: 10,
                    group: 'Ligue 1',
                    form: 'WDWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 8,
                      draw: 5,
                      lose: 0,
                      goals: {
                        for: 14,
                        against: 4,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 3,
                      lose: 0,
                      goals: {
                        for: 7,
                        against: 1,
                      },
                    },
                    away: {
                      played: 6,
                      win: 4,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 7,
                        against: 3,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 3,
                    team: {
                      id: 91,
                      name: 'Monaco',
                      logo: 'https://media-4.api-sports.io/football/teams/91.png',
                    },
                    points: 24,
                    goalsDiff: 8,
                    group: 'Ligue 1',
                    form: 'LDWLW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 7,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 27,
                        against: 19,
                      },
                    },
                    home: {
                      played: 6,
                      win: 5,
                      draw: 0,
                      lose: 1,
                      goals: {
                        for: 13,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 14,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 4,
                    team: {
                      id: 79,
                      name: 'Lille',
                      logo: 'https://media-4.api-sports.io/football/teams/79.png',
                    },
                    points: 23,
                    goalsDiff: 6,
                    group: 'Ligue 1',
                    form: 'WDDWW',
                    status: 'same',
                    description:
                      'Promotion - Champions League (Qualification: )',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 5,
                      lose: 2,
                      goals: {
                        for: 17,
                        against: 11,
                      },
                    },
                    home: {
                      played: 6,
                      win: 4,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 8,
                        against: 3,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 9,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 5,
                    team: {
                      id: 93,
                      name: 'Reims',
                      logo: 'https://media-4.api-sports.io/football/teams/93.png',
                    },
                    points: 23,
                    goalsDiff: 1,
                    group: 'Ligue 1',
                    form: 'WLLWW',
                    status: 'same',
                    description: 'Promotion - Europa League (Group Stage: )',
                    all: {
                      played: 14,
                      win: 7,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 20,
                        against: 19,
                      },
                    },
                    home: {
                      played: 7,
                      win: 4,
                      draw: 0,
                      lose: 3,
                      goals: {
                        for: 9,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 11,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 6,
                    team: {
                      id: 116,
                      name: 'Lens',
                      logo: 'https://media-4.api-sports.io/football/teams/116.png',
                    },
                    points: 19,
                    goalsDiff: 3,
                    group: 'Ligue 1',
                    form: 'WWDWD',
                    status: 'same',
                    description:
                      'Promotion - Europa Conference League (Qualification: )',
                    all: {
                      played: 13,
                      win: 5,
                      draw: 4,
                      lose: 4,
                      goals: {
                        for: 16,
                        against: 13,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 9,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 7,
                    team: {
                      id: 106,
                      name: 'Stade Brestois 29',
                      logo: 'https://media-4.api-sports.io/football/teams/106.png',
                    },
                    points: 18,
                    goalsDiff: 0,
                    group: 'Ligue 1',
                    form: 'WLLLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 5,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 14,
                        against: 14,
                      },
                    },
                    home: {
                      played: 5,
                      win: 2,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 7,
                        against: 6,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 8,
                    team: {
                      id: 111,
                      name: 'LE Havre',
                      logo: 'https://media-4.api-sports.io/football/teams/111.png',
                    },
                    points: 16,
                    goalsDiff: -1,
                    group: 'Ligue 1',
                    form: 'DDWDD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 7,
                      lose: 3,
                      goals: {
                        for: 12,
                        against: 13,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 6,
                        against: 5,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 5,
                      lose: 1,
                      goals: {
                        for: 6,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 9,
                    team: {
                      id: 112,
                      name: 'Metz',
                      logo: 'https://media-4.api-sports.io/football/teams/112.png',
                    },
                    points: 16,
                    goalsDiff: -5,
                    group: 'Ligue 1',
                    form: 'WWDDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 4,
                      lose: 5,
                      goals: {
                        for: 15,
                        against: 20,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 7,
                        against: 7,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 8,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 10,
                    team: {
                      id: 94,
                      name: 'Rennes',
                      logo: 'https://media-4.api-sports.io/football/teams/94.png',
                    },
                    points: 15,
                    goalsDiff: 2,
                    group: 'Ligue 1',
                    form: 'WLLDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 6,
                      lose: 4,
                      goals: {
                        for: 19,
                        against: 17,
                      },
                    },
                    home: {
                      played: 8,
                      win: 3,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 17,
                        against: 12,
                      },
                    },
                    away: {
                      played: 5,
                      win: 0,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 2,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 11,
                    team: {
                      id: 83,
                      name: 'Nantes',
                      logo: 'https://media-4.api-sports.io/football/teams/83.png',
                    },
                    points: 15,
                    goalsDiff: -6,
                    group: 'Ligue 1',
                    form: 'DLLLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 17,
                        against: 23,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 12,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 0,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 12,
                    team: {
                      id: 81,
                      name: 'Marseille',
                      logo: 'https://media-4.api-sports.io/football/teams/81.png',
                    },
                    points: 14,
                    goalsDiff: -1,
                    group: 'Ligue 1',
                    form: 'DLDLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 3,
                      draw: 5,
                      lose: 4,
                      goals: {
                        for: 13,
                        against: 14,
                      },
                    },
                    home: {
                      played: 5,
                      win: 3,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 7,
                        against: 1,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 13,
                    team: {
                      id: 82,
                      name: 'Montpellier',
                      logo: 'https://media-4.api-sports.io/football/teams/82.png',
                    },
                    points: 13,
                    goalsDiff: -1,
                    group: 'Ligue 1',
                    form: 'DLDLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 5,
                      lose: 5,
                      goals: {
                        for: 17,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 9,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 14,
                    team: {
                      id: 95,
                      name: 'Strasbourg',
                      logo: 'https://media-4.api-sports.io/football/teams/95.png',
                    },
                    points: 13,
                    goalsDiff: -7,
                    group: 'Ligue 1',
                    form: 'LDDDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 4,
                      lose: 6,
                      goals: {
                        for: 11,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 7,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 3,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 15,
                    team: {
                      id: 96,
                      name: 'Toulouse',
                      logo: 'https://media-4.api-sports.io/football/teams/96.png',
                    },
                    points: 12,
                    goalsDiff: -4,
                    group: 'Ligue 1',
                    form: 'LDLLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 6,
                      lose: 5,
                      goals: {
                        for: 13,
                        against: 17,
                      },
                    },
                    home: {
                      played: 5,
                      win: 1,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 8,
                        against: 6,
                      },
                    },
                    away: {
                      played: 8,
                      win: 1,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 16,
                    team: {
                      id: 97,
                      name: 'Lorient',
                      logo: 'https://media-4.api-sports.io/football/teams/97.png',
                    },
                    points: 11,
                    goalsDiff: -7,
                    group: 'Ligue 1',
                    form: 'LLDLW',
                    status: 'same',
                    description: 'Ligue 1 (Promotion - Play Offs: )',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 5,
                      lose: 6,
                      goals: {
                        for: 17,
                        against: 24,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 11,
                        against: 11,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 17,
                    team: {
                      id: 99,
                      name: 'Clermont Foot',
                      logo: 'https://media-4.api-sports.io/football/teams/99.png',
                    },
                    points: 10,
                    goalsDiff: -9,
                    group: 'Ligue 1',
                    form: 'DLWDL',
                    status: 'same',
                    description: 'Relegation - Ligue 2',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 4,
                      lose: 7,
                      goals: {
                        for: 9,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 3,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 6,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 18,
                    team: {
                      id: 80,
                      name: 'Lyon',
                      logo: 'https://media-4.api-sports.io/football/teams/80.png',
                    },
                    points: 7,
                    goalsDiff: -12,
                    group: 'Ligue 1',
                    form: 'LWDLD',
                    status: 'same',
                    description: 'Relegation - Ligue 2',
                    all: {
                      played: 12,
                      win: 1,
                      draw: 4,
                      lose: 7,
                      goals: {
                        for: 9,
                        against: 21,
                      },
                    },
                    home: {
                      played: 7,
                      win: 0,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 7,
                        against: 16,
                      },
                    },
                    away: {
                      played: 5,
                      win: 1,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 2,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      },
      '78_2023': {
        get: 'standings',
        parameters: {
          league: 78,
          season: 2023,
        },
        errors: [],
        results: 1,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            league: {
              id: 78,
              name: 'Bundesliga',
              country: 'Germany',
              logo: 'https://media-4.api-sports.io/football/leagues/78.png',
              flag: 'https://media-4.api-sports.io/flags/de.svg',
              season: 2023,
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 168,
                      name: 'Bayer Leverkusen',
                      logo: 'https://media-4.api-sports.io/football/teams/168.png',
                    },
                    points: 34,
                    goalsDiff: 27,
                    group: 'Bundesliga',
                    form: 'WWWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 12,
                      win: 11,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 37,
                        against: 10,
                      },
                    },
                    home: {
                      played: 6,
                      win: 6,
                      draw: 0,
                      lose: 0,
                      goals: {
                        for: 21,
                        against: 5,
                      },
                    },
                    away: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 16,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 2,
                    team: {
                      id: 157,
                      name: 'Bayern Munich',
                      logo: 'https://media-4.api-sports.io/football/teams/157.png',
                    },
                    points: 32,
                    goalsDiff: 34,
                    group: 'Bundesliga',
                    form: 'WWWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 12,
                      win: 10,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 43,
                        against: 9,
                      },
                    },
                    home: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 27,
                        against: 5,
                      },
                    },
                    away: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 16,
                        against: 4,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 3,
                    team: {
                      id: 172,
                      name: 'VfB Stuttgart',
                      logo: 'https://media-4.api-sports.io/football/teams/172.png',
                    },
                    points: 27,
                    goalsDiff: 16,
                    group: 'Bundesliga',
                    form: 'WWLLW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 12,
                      win: 9,
                      draw: 0,
                      lose: 3,
                      goals: {
                        for: 31,
                        against: 15,
                      },
                    },
                    home: {
                      played: 6,
                      win: 5,
                      draw: 0,
                      lose: 1,
                      goals: {
                        for: 20,
                        against: 6,
                      },
                    },
                    away: {
                      played: 6,
                      win: 4,
                      draw: 0,
                      lose: 2,
                      goals: {
                        for: 11,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 4,
                    team: {
                      id: 165,
                      name: 'Borussia Dortmund',
                      logo: 'https://media-4.api-sports.io/football/teams/165.png',
                    },
                    points: 24,
                    goalsDiff: 6,
                    group: 'Bundesliga',
                    form: 'WLLDW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 12,
                      win: 7,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 25,
                        against: 19,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 13,
                        against: 10,
                      },
                    },
                    away: {
                      played: 5,
                      win: 2,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 12,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 5,
                    team: {
                      id: 173,
                      name: 'RB Leipzig',
                      logo: 'https://media-4.api-sports.io/football/teams/173.png',
                    },
                    points: 23,
                    goalsDiff: 17,
                    group: 'Bundesliga',
                    form: 'LWLWW',
                    status: 'same',
                    description: 'Promotion - Europa League (Group Stage: )',
                    all: {
                      played: 12,
                      win: 7,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 29,
                        against: 12,
                      },
                    },
                    home: {
                      played: 6,
                      win: 4,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 19,
                        against: 4,
                      },
                    },
                    away: {
                      played: 6,
                      win: 3,
                      draw: 0,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 6,
                    team: {
                      id: 167,
                      name: '1899 Hoffenheim',
                      logo: 'https://media-4.api-sports.io/football/teams/167.png',
                    },
                    points: 20,
                    goalsDiff: 3,
                    group: 'Bundesliga',
                    form: 'DDLWL',
                    status: 'same',
                    description:
                      'Promotion - Europa Conference League (Qualification: )',
                    all: {
                      played: 12,
                      win: 6,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 24,
                        against: 21,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 9,
                        against: 13,
                      },
                    },
                    away: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 15,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 7,
                    team: {
                      id: 169,
                      name: 'Eintracht Frankfurt',
                      logo: 'https://media-4.api-sports.io/football/teams/169.png',
                    },
                    points: 18,
                    goalsDiff: 5,
                    group: 'Bundesliga',
                    form: 'LDWDW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 4,
                      draw: 6,
                      lose: 2,
                      goals: {
                        for: 18,
                        against: 13,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 8,
                        against: 6,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 10,
                        against: 7,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 8,
                    team: {
                      id: 161,
                      name: 'VfL Wolfsburg',
                      logo: 'https://media-4.api-sports.io/football/teams/161.png',
                    },
                    points: 16,
                    goalsDiff: -4,
                    group: 'Bundesliga',
                    form: 'WLDLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 5,
                      draw: 1,
                      lose: 6,
                      goals: {
                        for: 17,
                        against: 21,
                      },
                    },
                    home: {
                      played: 6,
                      win: 4,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 11,
                        against: 6,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 0,
                      lose: 5,
                      goals: {
                        for: 6,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 9,
                    team: {
                      id: 160,
                      name: 'SC Freiburg',
                      logo: 'https://media-4.api-sports.io/football/teams/160.png',
                    },
                    points: 15,
                    goalsDiff: -8,
                    group: 'Bundesliga',
                    form: 'DLDLW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 4,
                      draw: 3,
                      lose: 5,
                      goals: {
                        for: 15,
                        against: 23,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 11,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 10,
                    team: {
                      id: 170,
                      name: 'FC Augsburg',
                      logo: 'https://media-4.api-sports.io/football/teams/170.png',
                    },
                    points: 14,
                    goalsDiff: -3,
                    group: 'Bundesliga',
                    form: 'DDDWW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 3,
                      draw: 5,
                      lose: 4,
                      goals: {
                        for: 21,
                        against: 24,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 13,
                        against: 12,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 8,
                        against: 12,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 11,
                    team: {
                      id: 163,
                      name: 'Borussia Monchengladbach',
                      logo: 'https://media-4.api-sports.io/football/teams/163.png',
                    },
                    points: 13,
                    goalsDiff: -2,
                    group: 'Bundesliga',
                    form: 'LWDWL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 3,
                      draw: 4,
                      lose: 5,
                      goals: {
                        for: 25,
                        against: 27,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 9,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 3,
                      lose: 2,
                      goals: {
                        for: 16,
                        against: 18,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 12,
                    team: {
                      id: 162,
                      name: 'Werder Bremen',
                      logo: 'https://media-4.api-sports.io/football/teams/162.png',
                    },
                    points: 11,
                    goalsDiff: -7,
                    group: 'Bundesliga',
                    form: 'LDDWL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 3,
                      draw: 2,
                      lose: 7,
                      goals: {
                        for: 18,
                        against: 25,
                      },
                    },
                    home: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 12,
                        against: 13,
                      },
                    },
                    away: {
                      played: 5,
                      win: 0,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 12,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 13,
                    team: {
                      id: 180,
                      name: 'FC Heidenheim',
                      logo: 'https://media-4.api-sports.io/football/teams/180.png',
                    },
                    points: 11,
                    goalsDiff: -9,
                    group: 'Bundesliga',
                    form: 'DLWLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 3,
                      draw: 2,
                      lose: 7,
                      goals: {
                        for: 17,
                        against: 26,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 11,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 6,
                        against: 16,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 14,
                    team: {
                      id: 176,
                      name: 'VfL BOCHUM',
                      logo: 'https://media-4.api-sports.io/football/teams/176.png',
                    },
                    points: 10,
                    goalsDiff: -14,
                    group: 'Bundesliga',
                    form: 'DDWDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 12,
                      win: 1,
                      draw: 7,
                      lose: 4,
                      goals: {
                        for: 11,
                        against: 25,
                      },
                    },
                    home: {
                      played: 5,
                      win: 0,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 6,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 5,
                        against: 17,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 15,
                    team: {
                      id: 192,
                      name: 'FC Koln',
                      logo: 'https://media-4.api-sports.io/football/teams/192.png',
                    },
                    points: 9,
                    goalsDiff: -14,
                    group: 'Bundesliga',
                    form: 'WLDDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 3,
                      lose: 8,
                      goals: {
                        for: 10,
                        against: 24,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 10,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 16,
                    team: {
                      id: 181,
                      name: 'SV Darmstadt 98',
                      logo: 'https://media-4.api-sports.io/football/teams/181.png',
                    },
                    points: 9,
                    goalsDiff: -19,
                    group: 'Bundesliga',
                    form: 'LDDLL',
                    status: 'same',
                    description: 'Bundesliga (Relegation)',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 3,
                      lose: 8,
                      goals: {
                        for: 15,
                        against: 34,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 10,
                        against: 15,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 19,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 17,
                    team: {
                      id: 164,
                      name: 'FSV Mainz 05',
                      logo: 'https://media-4.api-sports.io/football/teams/164.png',
                    },
                    points: 8,
                    goalsDiff: -13,
                    group: 'Bundesliga',
                    form: 'DDWDL',
                    status: 'same',
                    description: 'Relegation - 2. Bundesliga',
                    all: {
                      played: 12,
                      win: 1,
                      draw: 5,
                      lose: 6,
                      goals: {
                        for: 12,
                        against: 25,
                      },
                    },
                    home: {
                      played: 5,
                      win: 1,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 5,
                        against: 10,
                      },
                    },
                    away: {
                      played: 7,
                      win: 0,
                      draw: 4,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 15,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 18,
                    team: {
                      id: 182,
                      name: 'Union Berlin',
                      logo: 'https://media-4.api-sports.io/football/teams/182.png',
                    },
                    points: 7,
                    goalsDiff: -15,
                    group: 'Bundesliga',
                    form: 'DLLLL',
                    status: 'same',
                    description: 'Relegation - 2. Bundesliga',
                    all: {
                      played: 12,
                      win: 2,
                      draw: 1,
                      lose: 9,
                      goals: {
                        for: 12,
                        against: 27,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 13,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 0,
                      lose: 5,
                      goals: {
                        for: 7,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      },
      '135_2023': {
        get: 'standings',
        parameters: {
          league: 135,
          season: 2023,
        },
        errors: [],
        results: 1,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            league: {
              id: 135,
              name: 'Serie A',
              country: 'Italy',
              logo: 'https://media-4.api-sports.io/football/leagues/135.png',
              flag: 'https://media-4.api-sports.io/flags/it.svg',
              season: 2023,
              standings: [
                [
                  {
                    rank: 1,
                    team: {
                      id: 496,
                      name: 'Juventus',
                      logo: 'https://media-4.api-sports.io/football/teams/496.png',
                    },
                    points: 33,
                    goalsDiff: 13,
                    group: 'Serie A',
                    form: 'WDWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 14,
                      win: 10,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 22,
                        against: 9,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 11,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 11,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 2,
                    team: {
                      id: 505,
                      name: 'Inter',
                      logo: 'https://media-4.api-sports.io/football/teams/505.png',
                    },
                    points: 32,
                    goalsDiff: 23,
                    group: 'Serie A',
                    form: 'DWWWW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 10,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 30,
                        against: 7,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 17,
                        against: 5,
                      },
                    },
                    away: {
                      played: 6,
                      win: 5,
                      draw: 1,
                      lose: 0,
                      goals: {
                        for: 13,
                        against: 2,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 3,
                    team: {
                      id: 489,
                      name: 'AC Milan',
                      logo: 'https://media-4.api-sports.io/football/teams/489.png',
                    },
                    points: 26,
                    goalsDiff: 7,
                    group: 'Serie A',
                    form: 'WDLDL',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 8,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 21,
                        against: 14,
                      },
                    },
                    home: {
                      played: 6,
                      win: 4,
                      draw: 0,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 3,
                      },
                    },
                    away: {
                      played: 7,
                      win: 4,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 13,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 4,
                    team: {
                      id: 492,
                      name: 'Napoli',
                      logo: 'https://media-4.api-sports.io/football/teams/492.png',
                    },
                    points: 24,
                    goalsDiff: 12,
                    group: 'Serie A',
                    form: 'WLWDW',
                    status: 'same',
                    description: 'Promotion - Champions League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 7,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 26,
                        against: 14,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 5,
                      draw: 2,
                      lose: 0,
                      goals: {
                        for: 16,
                        against: 5,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 5,
                    team: {
                      id: 497,
                      name: 'AS Roma',
                      logo: 'https://media-4.api-sports.io/football/teams/497.png',
                    },
                    points: 21,
                    goalsDiff: 10,
                    group: 'Serie A',
                    form: 'WDWLW',
                    status: 'same',
                    description: 'Promotion - Europa League (Group Stage: )',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 3,
                      lose: 4,
                      goals: {
                        for: 25,
                        against: 15,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 18,
                        against: 6,
                      },
                    },
                    away: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 7,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 6,
                    team: {
                      id: 500,
                      name: 'Bologna',
                      logo: 'https://media-4.api-sports.io/football/teams/500.png',
                    },
                    points: 21,
                    goalsDiff: 5,
                    group: 'Serie A',
                    form: 'WLWDW',
                    status: 'same',
                    description:
                      'Promotion - Europa Conference League (Qualification: )',
                    all: {
                      played: 13,
                      win: 5,
                      draw: 6,
                      lose: 2,
                      goals: {
                        for: 15,
                        against: 10,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 10,
                        against: 4,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 5,
                      lose: 1,
                      goals: {
                        for: 5,
                        against: 6,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 7,
                    team: {
                      id: 499,
                      name: 'Atalanta',
                      logo: 'https://media-4.api-sports.io/football/teams/499.png',
                    },
                    points: 20,
                    goalsDiff: 8,
                    group: 'Serie A',
                    form: 'LDLWW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 21,
                        against: 13,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 9,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 12,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 8,
                    team: {
                      id: 502,
                      name: 'Fiorentina',
                      logo: 'https://media-4.api-sports.io/football/teams/502.png',
                    },
                    points: 20,
                    goalsDiff: 3,
                    group: 'Serie A',
                    form: 'LWLLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 6,
                      draw: 2,
                      lose: 5,
                      goals: {
                        for: 20,
                        against: 17,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 10,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 3,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 9,
                    team: {
                      id: 512,
                      name: 'Frosinone',
                      logo: 'https://media-4.api-sports.io/football/teams/512.png',
                    },
                    points: 18,
                    goalsDiff: -2,
                    group: 'Serie A',
                    form: 'WLWLL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 5,
                      draw: 3,
                      lose: 5,
                      goals: {
                        for: 19,
                        against: 21,
                      },
                    },
                    home: {
                      played: 7,
                      win: 5,
                      draw: 1,
                      lose: 1,
                      goals: {
                        for: 14,
                        against: 10,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 5,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 10,
                    team: {
                      id: 1579,
                      name: 'Monza',
                      logo: 'https://media-4.api-sports.io/football/teams/1579.png',
                    },
                    points: 18,
                    goalsDiff: 1,
                    group: 'Serie A',
                    form: 'LDDWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 14,
                      win: 4,
                      draw: 6,
                      lose: 4,
                      goals: {
                        for: 15,
                        against: 14,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 4,
                      lose: 1,
                      goals: {
                        for: 9,
                        against: 5,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 11,
                    team: {
                      id: 487,
                      name: 'Lazio',
                      logo: 'https://media-4.api-sports.io/football/teams/487.png',
                    },
                    points: 17,
                    goalsDiff: -1,
                    group: 'Serie A',
                    form: 'LDLWW',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 5,
                      draw: 2,
                      lose: 6,
                      goals: {
                        for: 14,
                        against: 15,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 2,
                      lose: 1,
                      goals: {
                        for: 7,
                        against: 4,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 0,
                      lose: 5,
                      goals: {
                        for: 7,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 12,
                    team: {
                      id: 503,
                      name: 'Torino',
                      logo: 'https://media-4.api-sports.io/football/teams/503.png',
                    },
                    points: 16,
                    goalsDiff: -6,
                    group: 'Serie A',
                    form: 'LDWWL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 4,
                      lose: 5,
                      goals: {
                        for: 10,
                        against: 16,
                      },
                    },
                    home: {
                      played: 6,
                      win: 2,
                      draw: 3,
                      lose: 1,
                      goals: {
                        for: 4,
                        against: 5,
                      },
                    },
                    away: {
                      played: 7,
                      win: 2,
                      draw: 1,
                      lose: 4,
                      goals: {
                        for: 6,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 13,
                    team: {
                      id: 867,
                      name: 'Lecce',
                      logo: 'https://media-4.api-sports.io/football/teams/867.png',
                    },
                    points: 15,
                    goalsDiff: -3,
                    group: 'Serie A',
                    form: 'DDLLD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 6,
                      lose: 4,
                      goals: {
                        for: 15,
                        against: 18,
                      },
                    },
                    home: {
                      played: 7,
                      win: 3,
                      draw: 2,
                      lose: 2,
                      goals: {
                        for: 8,
                        against: 9,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 7,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 14,
                    team: {
                      id: 488,
                      name: 'Sassuolo',
                      logo: 'https://media-4.api-sports.io/football/teams/488.png',
                    },
                    points: 15,
                    goalsDiff: -4,
                    group: 'Serie A',
                    form: 'WDLDL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 3,
                      lose: 6,
                      goals: {
                        for: 20,
                        against: 24,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 11,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 1,
                      lose: 3,
                      goals: {
                        for: 10,
                        against: 13,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 15,
                    team: {
                      id: 495,
                      name: 'Genoa',
                      logo: 'https://media-4.api-sports.io/football/teams/495.png',
                    },
                    points: 14,
                    goalsDiff: -4,
                    group: 'Serie A',
                    form: 'LWLWL',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 4,
                      draw: 2,
                      lose: 7,
                      goals: {
                        for: 14,
                        against: 18,
                      },
                    },
                    home: {
                      played: 6,
                      win: 3,
                      draw: 1,
                      lose: 2,
                      goals: {
                        for: 9,
                        against: 8,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 5,
                        against: 10,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 16,
                    team: {
                      id: 494,
                      name: 'Udinese',
                      logo: 'https://media-4.api-sports.io/football/teams/494.png',
                    },
                    points: 11,
                    goalsDiff: -9,
                    group: 'Serie A',
                    form: 'LDWDD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 1,
                      draw: 8,
                      lose: 4,
                      goals: {
                        for: 9,
                        against: 18,
                      },
                    },
                    home: {
                      played: 6,
                      win: 0,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 4,
                        against: 9,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 4,
                      lose: 2,
                      goals: {
                        for: 5,
                        against: 9,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 17,
                    team: {
                      id: 490,
                      name: 'Cagliari',
                      logo: 'https://media-4.api-sports.io/football/teams/490.png',
                    },
                    points: 10,
                    goalsDiff: -12,
                    group: 'Serie A',
                    form: 'DLWWD',
                    status: 'same',
                    description: '',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 4,
                      lose: 7,
                      goals: {
                        for: 13,
                        against: 25,
                      },
                    },
                    home: {
                      played: 7,
                      win: 2,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 9,
                        against: 14,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 18,
                    team: {
                      id: 511,
                      name: 'Empoli',
                      logo: 'https://media-4.api-sports.io/football/teams/511.png',
                    },
                    points: 10,
                    goalsDiff: -17,
                    group: 'Serie A',
                    form: 'LWLLW',
                    status: 'same',
                    description: 'Relegation - Serie B',
                    all: {
                      played: 13,
                      win: 3,
                      draw: 1,
                      lose: 9,
                      goals: {
                        for: 8,
                        against: 25,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 4,
                        against: 11,
                      },
                    },
                    away: {
                      played: 6,
                      win: 2,
                      draw: 0,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 14,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 19,
                    team: {
                      id: 504,
                      name: 'Verona',
                      logo: 'https://media-4.api-sports.io/football/teams/504.png',
                    },
                    points: 9,
                    goalsDiff: -9,
                    group: 'Serie A',
                    form: 'DLLLL',
                    status: 'same',
                    description: 'Relegation - Serie B',
                    all: {
                      played: 13,
                      win: 2,
                      draw: 3,
                      lose: 8,
                      goals: {
                        for: 9,
                        against: 18,
                      },
                    },
                    home: {
                      played: 6,
                      win: 1,
                      draw: 2,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 10,
                      },
                    },
                    away: {
                      played: 7,
                      win: 1,
                      draw: 1,
                      lose: 5,
                      goals: {
                        for: 3,
                        against: 8,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                  {
                    rank: 20,
                    team: {
                      id: 514,
                      name: 'Salernitana',
                      logo: 'https://media-4.api-sports.io/football/teams/514.png',
                    },
                    points: 8,
                    goalsDiff: -15,
                    group: 'Serie A',
                    form: 'WDLLD',
                    status: 'same',
                    description: 'Relegation - Serie B',
                    all: {
                      played: 13,
                      win: 1,
                      draw: 5,
                      lose: 7,
                      goals: {
                        for: 10,
                        against: 25,
                      },
                    },
                    home: {
                      played: 7,
                      win: 1,
                      draw: 3,
                      lose: 3,
                      goals: {
                        for: 6,
                        against: 14,
                      },
                    },
                    away: {
                      played: 6,
                      win: 0,
                      draw: 2,
                      lose: 4,
                      goals: {
                        for: 4,
                        against: 11,
                      },
                    },
                    update: '2023-12-02T00:00:00+00:00',
                  },
                ],
              ],
            },
          },
        ],
      },
    };
    /*****************************/

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

/** FIXTURE */
/** FIXTURE */
/** FIXTURE */
/** FIXTURE */
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

    /* FORCAGE********************/
    this.fixtures = {
      '42': {
        get: 'fixtures',
        parameters: {
          team: 42,
          league: 39,
          last: 10,
          status: 'FT',
        },
        errors: [],
        results: 10,
        paging: {
          current: 1,
          total: 1,
        },
        response: [
          {
            fixture: {
              id: 1035294,
              referee: 'T. Robinson',
              timezone: 'UTC',
              date: '2023-11-25T17:30:00+00:00',
              timestamp: 1700933400,
              periods: {
                first: 1700933400,
                second: 1700937000,
              },
              venue: {
                id: 10503,
                name: 'Gtech Community Stadium',
                city: 'Brentford, Middlesex',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 13',
            },
            teams: {
              home: {
                id: 55,
                name: 'Brentford',
                logo: 'https://media-4.api-sports.io/football/teams/55.png',
                winner: false,
              },
              away: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
            },
            goals: {
              home: 0,
              away: 1,
            },
            score: {
              halftime: {
                home: 0,
                away: 0,
              },
              fulltime: {
                home: 0,
                away: 1,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035148,
              referee: 'M. Oliver',
              timezone: 'UTC',
              date: '2023-11-11T15:00:00+00:00',
              timestamp: 1699714800,
              periods: {
                first: 1699714800,
                second: 1699718400,
              },
              venue: {
                id: 494,
                name: 'Emirates Stadium',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 12',
            },
            teams: {
              home: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
              away: {
                id: 44,
                name: 'Burnley',
                logo: 'https://media-4.api-sports.io/football/teams/44.png',
                winner: false,
              },
            },
            goals: {
              home: 3,
              away: 1,
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: 3,
                away: 1,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035143,
              referee: 'S. Attwell',
              timezone: 'UTC',
              date: '2023-11-04T17:30:00+00:00',
              timestamp: 1699119000,
              periods: {
                first: 1699119000,
                second: 1699122600,
              },
              venue: {
                id: 562,
                name: "St. James' Park",
                city: 'Newcastle upon Tyne',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 11',
            },
            teams: {
              home: {
                id: 34,
                name: 'Newcastle',
                logo: 'https://media-4.api-sports.io/football/teams/34.png',
                winner: true,
              },
              away: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: false,
              },
            },
            goals: {
              home: 1,
              away: 0,
            },
            score: {
              halftime: {
                home: 0,
                away: 0,
              },
              fulltime: {
                home: 1,
                away: 0,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035128,
              referee: 'T. Robinson',
              timezone: 'UTC',
              date: '2023-10-28T14:00:00+00:00',
              timestamp: 1698501600,
              periods: {
                first: 1698501600,
                second: 1698505200,
              },
              venue: {
                id: 494,
                name: 'Emirates Stadium',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 10',
            },
            teams: {
              home: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
              away: {
                id: 62,
                name: 'Sheffield Utd',
                logo: 'https://media-4.api-sports.io/football/teams/62.png',
                winner: false,
              },
            },
            goals: {
              home: 5,
              away: 0,
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: 5,
                away: 0,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035120,
              referee: 'C. Kavanagh',
              timezone: 'UTC',
              date: '2023-10-21T16:30:00+00:00',
              timestamp: 1697905800,
              periods: {
                first: 1697905800,
                second: 1697909400,
              },
              venue: {
                id: 519,
                name: 'Stamford Bridge',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 9',
            },
            teams: {
              home: {
                id: 49,
                name: 'Chelsea',
                logo: 'https://media-4.api-sports.io/football/teams/49.png',
                winner: false,
              },
              away: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: false,
              },
            },
            goals: {
              home: 2,
              away: 2,
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: 2,
                away: 2,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035107,
              referee: 'M. Oliver',
              timezone: 'UTC',
              date: '2023-10-08T15:30:00+00:00',
              timestamp: 1696779000,
              periods: {
                first: 1696779000,
                second: 1696782600,
              },
              venue: {
                id: 494,
                name: 'Emirates Stadium',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 8',
            },
            teams: {
              home: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
              away: {
                id: 50,
                name: 'Manchester City',
                logo: 'https://media-4.api-sports.io/football/teams/50.png',
                winner: false,
              },
            },
            goals: {
              home: 1,
              away: 0,
            },
            score: {
              halftime: {
                home: 0,
                away: 0,
              },
              fulltime: {
                home: 1,
                away: 0,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035097,
              referee: 'M. Salisbury',
              timezone: 'UTC',
              date: '2023-09-30T14:00:00+00:00',
              timestamp: 1696082400,
              periods: {
                first: 1696082400,
                second: 1696086000,
              },
              venue: {
                id: 504,
                name: 'Vitality Stadium',
                city: 'Bournemouth, Dorset',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 7',
            },
            teams: {
              home: {
                id: 35,
                name: 'Bournemouth',
                logo: 'https://media-4.api-sports.io/football/teams/35.png',
                winner: false,
              },
              away: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
            },
            goals: {
              home: 0,
              away: 4,
            },
            score: {
              halftime: {
                home: 0,
                away: 2,
              },
              fulltime: {
                home: 0,
                away: 4,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035087,
              referee: 'R. Jones',
              timezone: 'UTC',
              date: '2023-09-24T13:00:00+00:00',
              timestamp: 1695560400,
              periods: {
                first: 1695560400,
                second: 1695564000,
              },
              venue: {
                id: 494,
                name: 'Emirates Stadium',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 6',
            },
            teams: {
              home: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: false,
              },
              away: {
                id: 47,
                name: 'Tottenham',
                logo: 'https://media-4.api-sports.io/football/teams/47.png',
                winner: false,
              },
            },
            goals: {
              home: 2,
              away: 2,
            },
            score: {
              halftime: {
                home: 1,
                away: 1,
              },
              fulltime: {
                home: 2,
                away: 2,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035079,
              referee: 'S. Hooper',
              timezone: 'UTC',
              date: '2023-09-17T15:30:00+00:00',
              timestamp: 1694964600,
              periods: {
                first: 1694964600,
                second: 1694968200,
              },
              venue: {
                id: 8560,
                name: 'Goodison Park',
                city: 'Liverpool',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 5',
            },
            teams: {
              home: {
                id: 45,
                name: 'Everton',
                logo: 'https://media-4.api-sports.io/football/teams/45.png',
                winner: false,
              },
              away: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
            },
            goals: {
              home: 0,
              away: 1,
            },
            score: {
              halftime: {
                home: 0,
                away: 0,
              },
              fulltime: {
                home: 0,
                away: 1,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
          {
            fixture: {
              id: 1035067,
              referee: 'A. Taylor',
              timezone: 'UTC',
              date: '2023-09-03T15:30:00+00:00',
              timestamp: 1693755000,
              periods: {
                first: 1693755000,
                second: 1693758600,
              },
              venue: {
                id: 494,
                name: 'Emirates Stadium',
                city: 'London',
              },
              status: {
                long: 'Match Finished',
                short: 'FT',
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-4.api-sports.io/football/leagues/39.png',
              flag: 'https://media-4.api-sports.io/flags/gb.svg',
              season: 2023,
              round: 'Regular Season - 4',
            },
            teams: {
              home: {
                id: 42,
                name: 'Arsenal',
                logo: 'https://media-4.api-sports.io/football/teams/42.png',
                winner: true,
              },
              away: {
                id: 33,
                name: 'Manchester United',
                logo: 'https://media-4.api-sports.io/football/teams/33.png',
                winner: false,
              },
            },
            goals: {
              home: 3,
              away: 1,
            },
            score: {
              halftime: {
                home: 1,
                away: 1,
              },
              fulltime: {
                home: 3,
                away: 1,
              },
              extratime: {
                home: 0,
                away: 0,
              },
              penalty: {
                home: 0,
                away: 0,
              },
            },
          },
        ],
      },
    };
    /*****************************/

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
