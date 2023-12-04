import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Standings } from './components/standings/app-standings.component';
import { Fixtures } from './components/fixtures/app-fixtures.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: '', component: Standings },
    { path: 'fixtures/:league/:team', component: Fixtures },
  ];
}