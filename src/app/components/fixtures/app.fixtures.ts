import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { I_Fixture, I_FixtureResponse } from 'src/app/model/fixtures.model';
import { FixturesService } from 'src/app/services/footAPI.services';

@Component({
  selector: 'app-fixtures',
  templateUrl: './app.fixtures.html',
})
export class Fixtures implements OnInit {
  dataFixture: I_Fixture[] = [];
  team?: number;
  league?: number;

  constructor(
    private r: Router,
    private activeRoute: ActivatedRoute,
    private s: FixturesService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(() => {
      this.team = +this.activeRoute.snapshot.params['league'];
      this.league = +this.activeRoute.snapshot.params['team'];
    });

    if (this.team && this.league) {
      this.getTeamFixtures(this.team, this.league);
    } else {
      this.r.navigateByUrl('/');
    }
  }

  getTeamFixtures(teamCode: number, leagueCode: number): void {
    this.s.getFixtures(teamCode, leagueCode).subscribe((data) => {
      this.dataFixture = data.response;
    });
  }

  goBack() {
    this.r.navigateByUrl('/');
  }
}
