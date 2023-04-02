import { Component, Input, SimpleChanges } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-artists-tab',
  templateUrl: './card-artists-tab.component.html',
  styleUrls: ['./card-artists-tab.component.css']
})
export class CardArtistsTabComponent {
  nodeUrl = environment.nodeUrl;
  intervalSeconds = 0;
  progressSpinner = 95;
  followers: number = 90000000;
  
  @Input() artistArray: any;
  
  artistsApiData = [];

  constructor(config: NgbCarouselConfig, private http: HttpClient) {
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(){

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artistArray']){
      console.log(this.followers.toLocaleString("en-US"));
      this.getArtistInformation()
      console.log("*******************************")
      console.log(this.artistsApiData)
    }
  }

  getArtistInformation(){
    if (this.artistArray){
      var artists = this.artistArray.join("|")
      const url = `${this.nodeUrl}/api/spotify?artists=${artists}`;
      // const url = `http://localhost:3000/api/spotify?artists=Maroon 5`;
      // const url = `http://localhost:3000/api/spotify?artists=rahul dravid`;
      console.log(url)
      console.log("Making request...")
      
      let result = this.http.get<any>(url);
      result.subscribe((dataOfArtists) => {
        console.log("Artist Information------------|||||||||");
        console.log(dataOfArtists)
        // data = data[0]
        if(dataOfArtists){
          dataOfArtists.forEach(data => {
            console.log("ARTIST DATA: ", data)
            console.log(this.artistArray)
            let isArtistPresent = this.artistArray.map(item => item.toLowerCase()).includes(data?.name.toLowerCase());
            console.log(isArtistPresent)
            if (!isArtistPresent){
              console.log("Artist name does not match with spotify name")
              return
            }
            let currentArtist = {}
            currentArtist['name'] = data?.name;
            currentArtist['followers'] = Number(data?.followers?.total).toLocaleString('en-US');
            currentArtist['popularity'] = data?.popularity;
            currentArtist['external_urls'] = data?.external_urls?.spotify
            currentArtist['dp'] = data?.images[0]?.url
            const urlForAlbums = `${this.nodeUrl}/api/spotify/topAlbums?artistId=${data?.id}`;
            let albumsData = this.http.get<any>(urlForAlbums);
            albumsData.subscribe((data2) => {
              // console.log("<<<<<<<<<<<<<<<<<<<< INSIDE ALBUMS DATA: >>>>>>>>>>>>>>>>>>>>>>>>>>")
              // console.log("THIS", data2)
              let topThreeAlbumsUrl = []
              for (let obj of data2.items){
                topThreeAlbumsUrl.push(obj.images[0].url)
              }
              currentArtist['topThreeAlbumsUrl'] = [...topThreeAlbumsUrl]; 
              console.log("+++++++++++++++++++++++++++++Current Artists: ")
              console.log(currentArtist);
              this.artistsApiData.push(Object.assign({}, currentArtist))
              console.log(this.artistsApiData)
            }, (error) => {
              console.log("Something went wrong with getting top albums!: ", error)
            })
          });
          
        }
      }, (error) => {
        console.log("An error occurred while fetching the data: ");
        console.log(error);
      });
    }

  }
      
}
