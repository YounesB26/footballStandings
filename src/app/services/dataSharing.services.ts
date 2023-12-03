import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataSharingService {
  private currentLeague: number = 0;

  setLeague(league: number): void {
    this.currentLeague = league;
  }

  getLeague(): number {
    return this.currentLeague;
  }
}
