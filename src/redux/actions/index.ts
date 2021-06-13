
import { ActionTypes } from "./types";

type ITiles = {
  type: ActionTypes.TILES;
  payload: Array<boolean>;
};

interface IRows {
  type: ActionTypes.ROW;
  payload: number;
}

export type Action = ITiles | IRows;
