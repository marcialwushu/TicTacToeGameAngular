import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(public gs: GameService){

  }

  playerClick(i) {
    if(this.gs.turn == 0) {
      this.gs.blocks[i].setValue("tick");
    }else {
      this.gs.blocks[i].setValue("cross")
    }

    this.changeTurn();
  }

  botTurn() {
    alert("Bot's turn");
  }

  changeTurn() {
    this.gs.changeTurn();

    if(this.gs.turn == 1) { //Bot turn
      this.botTurn();
    }
  }


}
