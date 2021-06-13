export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

import {ActionType} from './types'

type ITiles = {
    type:ActionType.TILES
    payload:Array<boolean>
}

interface IRows{
    type:ActionType.ROW
    payload:number
}

export type Action = ITiles | IRows