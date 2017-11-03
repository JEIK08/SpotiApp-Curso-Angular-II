import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //Para realizar mapeo de los datos

@Injectable()
export class SpotifyService {

  token: string = 'BQCOZsR8oj1NKS-WcsJXu0oc9b-tbdSWroeRESI4adjh07Cn1EtlyePLayubKia1VmSjP4vZfGbGaERPvbrTRA';
  artistas: any[];
  urlArtistas: string = 'https://api.spotify.com/v1/search?';
  urlArtista: string = 'https://api.spotify.com/v1/artists/';

  constructor(private http: Http) { }

  getArtistas(termino: string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.token);
    let url = `${ this.urlArtistas }q=${ termino }&type=artist`;
    return this.http.get(url,{headers}).map(res => {
      this.artistas = res.json().artists.items;
    });
  }

  getArtista(id: string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.token);
    let url = this.urlArtista + id;
    return this.http.get(url,{headers}).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getTop(id: string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.token);
    let url = `${ this.urlArtista + id }/top-tracks?country=CO`;
    return this.http.get(url,{headers}).map(res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }

}