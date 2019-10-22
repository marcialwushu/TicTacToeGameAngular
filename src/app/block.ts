export class Block {
  free: boolean = true;
  value: string = ""; //cross | trick
  symbol: string = ""; //done | close

  setValue(value){
    this.value = value;

    if(this.value == "tick") {
      this.symbol = "done";
    } else {
      this.symbol = "_close_";
    }
  }

}
