import { Component } from '@angular/core';
import { StandingsService } from '../services/app.standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './app.standings.html',
})
export class Standings {
  public data: any;
  constructor(private st: StandingsService) {}

  ngOnInit() {
    this.data = this.st.getData(39).response.league;
    console.log(this.data);
    
    // this.st.getData(140);
    // this.st.getData(61);
    // this.st.getData(78);
    // this.st.getData(135);

    // [39, 140, 61, 78, 135].forEach((league) => {
    //   this.st.getData(league).subscribe((data) => {
    //     this.data = data;
    //     console.log(data);
    //   });
    // });
    // this.standings.getData().subscribe((data) => {
    //   this.data = data;
    //   console.log(data);
    // });
  }
}
