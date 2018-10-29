import { BlockchainModel } from './blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: BlockchainModel[] = [], action) {
  switch (action.type) {
    case ADD_COIN:
      return [...state, action.payload];
    default:
      return state;
  }
}