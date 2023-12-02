import { Routes } from '@angular/router';
import { Standings } from '../components/standings/app.standings';
import { Fixtures } from '../components/fixtures/app.fixtures';

export class Router {
  routes: Routes = [
    { path: '', component: Standings },
    { path: 'fixtures/:league/:team', component: Fixtures },
  ];
  constructor() {}
}
