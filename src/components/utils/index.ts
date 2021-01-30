

export class Game{
  row:number;
  arr:Boolean[];
  rightTile:number;
  constructor(row:number){
    this.row = row
    this.arr = new Array(row *row).fill(false)
    this.rightTile = Math.floor(Math.random() * this.arr.length)
    this.arr[this.rightTile] = true;
  }

  setGame(func:React.Dispatch<React.SetStateAction<Boolean[]>>){
   func(this.arr);
  }
}



//Refactored codes

// const resetRows = () => setRow(2);
// const setGame = () => {
  //   const newArr = new Array(row * row).fill(false);
  //   const rightTile = Math.floor(Math.random() * newArr.length);
  //   newArr[rightTile] = true;
  //   setTiles(newArr);
  // };
