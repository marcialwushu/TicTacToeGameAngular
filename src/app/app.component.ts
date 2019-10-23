import { Component, Inject } from '@angular/core';
import { GameService } from './game.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent {
  title = 'tic-tac-toe';
  lock = false;

  constructor(public gs: GameService, private _snackBar: MatSnackBar){

  }

  newGame() {
    this.gs.freeBlockRemaining = 9;
    this.gs.initBlocks();
    this.lock = false;
    this.gs.turn = 0;
  }

  resetGame(event) {
    location.reload();
    event.preventDefault();
  }


  playerClick(i) {

    if(this.gs.blocks[i].free == false || this.lock == true) { //Se o bloco já estiver preenchido, não faça nada
      return;
    }

    this.gs.freeBlockRemaining -= 1; //Reduza n° de blocos livres após cada seleção

    if( this.gs.freeBlockRemaining <= 0 ) {

      this.gs.draw += 1;
      this.lock = true;
      this._snackBar.open("Game:", "Draw", {
        duration: 4000,
      });
      this.newGame();
      return;
    }

    if(this.gs.turn == 0) {
      this.gs.blocks[i].setValue("tick");
    }else {
      this.gs.blocks[i].setValue("cross")
    }

    var complete = this.gs.blockSetComplete();

    if(complete == true) {
      this.gs.players[this.gs.turn].score += 1;
      this._snackBar.open("Winner:", "Player"+ (this.gs.turn +1), {
        duration: 4000,
      });

      this.newGame();
      return;

    } else {
      this.changeTurn();
    }


  }

  botTurn() {
    if(this.gs.freeBlockRemaining <= 0 ) {
      return;
    }

    var bot_selected = this.gs.figureBotMove()-1;

    if(this.gs.blocks[bot_selected].free == true) {
      this.playerClick(bot_selected);
    } else {
      this.botTurn();
      return;
    }
  }

  changeTurn() {
    this.gs.changeTurn();

    if(this.gs.turn == 1) { //Bot turn
      this.botTurn();
    }
  }


}
