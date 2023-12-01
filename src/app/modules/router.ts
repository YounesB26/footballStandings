import { Routes } from '@angular/router';
import { Standings } from '../standings/app.standings';

export class Router {
  routes: Routes = [{ path: '', component: Standings }];
  constructor() {}
}
