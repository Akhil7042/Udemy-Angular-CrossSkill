import { Injectable } from '@angular/core';
import { albums } from 'src/assets/albums';
import { of, filter, map, toArray, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  public albumCount: number = 10;

  constructor() {}

  fetchAlbums(currentLength: number) {
    let endLimit = currentLength + this.albumCount + 1;
    /*
if currently 1-10 albums are visible on screen, 10 is the currentLenbgth.
WE need to fetch 11-21 albums. Index of 11th album will be 10 and index of 21st
album will be 20

    */
    return from(albums).pipe(
      filter((album: any) => {
        return (
          parseInt(album.id) > currentLength && parseInt(album.id) < endLimit
        );
      })
    );
  }
}
