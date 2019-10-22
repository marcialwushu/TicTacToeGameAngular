import { Injectable } from '@angular/core';
import { Block } from './block';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players = [];
  turn: number = 0;//By Default the value will be ZERO (i.e. Player1 Turn)
  draw: number = 0;

  blocks = [];
  freeBlockRemaining = 9;

  constructor() {
    this.initBlocks();
    this.initPlayers();
  }

  initBlocks() {
    this.blocks = [];

    for (var i = 1;i <= 9; ++i) {
      var block = new Block();

      block.free = true;
      block.value = "";
      block.symbol = "";

      this.blocks.push(block);
    }
  }

  initPlayers() {
    this.players = [];

    //Player 1
    var player1 = new Player();

    //Player 2
    var player2 = new Player();

    this.players.push(player1);
    this.players.push(player2);

  }
}
