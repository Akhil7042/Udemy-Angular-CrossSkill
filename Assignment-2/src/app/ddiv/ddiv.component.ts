import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ddiv',
  templateUrl: './ddiv.component.html',
  styleUrls: ['./ddiv.component.css']
})
export class DdivComponent {
  constructor(private dataService: DataService) {}

  public albumData: any = [];

  ngOnInit() {
    window.scroll(0, 0);
    this.getAlbumData(true); //for the first time
  }

  onButtonClick(divNumber: number) {
    alert(`Button '${divNumber}' is clicked.`);
  }

  getAlbumData(fetchData: boolean) {
    if (fetchData) {
      this.dataService.fetchAlbums(this.albumData.length).subscribe(
        (response) => {
          this.albumData = this.albumData.concat(response);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
