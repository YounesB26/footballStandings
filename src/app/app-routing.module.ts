import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Standings } from './components/standings/app-standings.component';
import { Fixtures } from './components/fixtures/app-fixtures.component';

const routes: Routes = [
  { path: '', component: Standings },
  { path: 'fixtures/:league/:team', component: Fixtures },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
