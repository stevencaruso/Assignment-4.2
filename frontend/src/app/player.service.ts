import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

    getPlayers() {
    return this.http.get(`${this.uri}/players`);
  }

  getPlayersById(id) {
    return this.http.get(`${this.uri}/players/${id}`);
  }
  addPlayer(First_Name, Last_Name, Age, Free_Throws, Dunks, Deaths_of_Fans) {
    const player = {
      First_Name: First_Name,
      Last_Name: Last_Name,
      Age: Age,
      Free_Throws: Free_Throws,
      Dunks: Dunks,
      Deaths_of_Fans: Deaths_of_Fans
    };
    return this.http.post(`${this.uri}/players/add`, player);
  }
  updatePlayer(id, First_Name, Last_Name, Age, Free_Throws, Dunks, Deaths_of_Fans) {
    const player = {
      First_Name: First_Name,
      Last_Name: Last_Name,
      Age: Age,
      Free_Throws: Free_Throws,
      Dunks: Dunks,
      Deaths_of_Fans: Deaths_of_Fans
    };
    return this.http.post(`${this.uri}/players/update/${id}`, player);
    }
    deletePlayer(id) {
    return this.http.get(`${this.uri}/players/delete/${id}`);
  }
}

