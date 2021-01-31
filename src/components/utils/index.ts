
interface IColor{
  correctColor:string;
    wrongColor:string;
}
export class Game{
  row:number;
  arr:Boolean[];
  rightTile:number;
  randomHue:string;
  private _colors:Array<string>;
  
  
  constructor(row:number){
    this.row = row;
    this.arr = new Array(row *row).fill(false);
    this.rightTile = Math.floor(Math.random() * this.arr.length);
    this.arr[this.rightTile] = true;
    this.randomHue = (Math.random() * 360).toFixed(1);
    this._colors=[`hsl(${this.randomHue},100%, 50%)`,`hsl(${this.randomHue},75.7%,75.5%)`]
  }
  get colors(){
    return this._colors;
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
    // const wrongColor = `hsl(${randomHue},100%, 50%)`;
  // const correctColor = `hsl(${randomHue},78.7%,65.5%)`;

  // const colorPicker = (check: Boolean) => (check ? correctColor : wrongColor);
