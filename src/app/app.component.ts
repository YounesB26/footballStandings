import { Component } from '@angular/core';
import { StandingsService } from './services/app.standings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'footballStandings';
  data: any;

  constructor(private standings: StandingsService) {}

  ngOnInit() {
    console.log(this.standings.getData());
    
    // this.standings.getData().subscribe((data) => {
    //   this.data = data;
    //   console.log(data);      
    // });
  }
}
