import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from './modules/router';
import { Standings } from './components/standings/app.standings';
import { Fixtures } from './components/fixtures/app.fixtures';

const router: Router = new Router();

@NgModule({
  declarations: [AppComponent, Standings, Fixtures],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(router.routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
