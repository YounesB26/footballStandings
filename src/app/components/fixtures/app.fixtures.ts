import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixtures',
  templateUrl: './app.fixtures.html',
})
export class Fixtures implements OnInit {
  team?: number;
  league?: number;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(() => {
      this.team = this.activeRoute.snapshot.params['league'];
      this.league = this.activeRoute.snapshot.params['team'];
    });
  }
}
