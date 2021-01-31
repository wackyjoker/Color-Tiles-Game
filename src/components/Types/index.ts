export type IContext = {
    tiles: Array<Boolean>;
    row: number;
    openModal:boolean;
    winCheck:boolean;
    players:Array<String>;
    onCloseModal:()=>void;
    returnedHandler?:()=>void
    validator:(bol:Boolean)=>()=>void;
    colorPicker:(bol:Boolean) =>string; 
    addPlayer:(player:string)=>void;
  };

  // handleRows?: () => void;
  // handleError?:()=>void;
  // type IhandleInput = (e: string) => void;
// type IsetState = (value: React.SetStateAction<number>) => number;
// type IsetState<S> = (value: React.SetStateAction<S>) => React.SetStateAction<S>(S);
// type SetStateAction<S> = S | ((prevState: S) => S);
