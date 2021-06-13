export const FETCH_POSTS = "FETCH_POSTS";
export const NEW_POST = "NEW_POST";

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
