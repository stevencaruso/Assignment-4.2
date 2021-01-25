import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: Player[];
  displayedColumns = ['First_Name', 'Last_Name', 'Age', 'Free_Throws', 'Dunks', 'Deaths_of_Fans'];

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.playerService
    .getPlayers()
    .subscribe((data: Player[]) => {
      this.players = data;
      console.log('Data requested ... ');
      console.log(this.players);
    });
  }

  editPlayer(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deletePlayer(id) {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.fetchPlayers();
    });
  }

  }
