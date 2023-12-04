import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { I_Fixture } from 'src/app/model/fixtures';
import { FixturesService } from 'src/app/services/app-api.service';
import { DataSharingService } from 'src/app/services/app-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: './app-fixtures.component.html',
  styleUrls : ['./app-fixtures.component.css']
})
export class Fixtures implements OnInit, OnDestroy {
  dataFixture: I_Fixture[] = [];
  team: number = 0;
  league: number = 0;
  subscription: Subscription = Subscription.EMPTY;

  constructor(
    private router: Router,
    private sharedData: DataSharingService,
    private activeRoute: ActivatedRoute,
    private fixturesService: FixturesService
  ) {}

  ngOnInit() {
    this.subscription = this.activeRoute.params.subscribe(() => {
      this.team = +this.activeRoute.snapshot.params['team'];
      this.league = +this.activeRoute.snapshot.params['league'];
      if (this.team && this.league) {
        this.getTeamFixtures(this.league, this.team);
        this.sharedData.setLeague(this.league);
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

  getTeamFixtures(leagueCode: number, teamCode: number): void {
    this.fixturesService.getFixtures(leagueCode, teamCode).subscribe((data) => {
      this.dataFixture = data.response;
    });
  }

  goBack() {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
