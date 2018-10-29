import { BlockchainModel } from './blockchain/blockchain.model';

export interface AppState {
  readonly blockchain: BlockchainModel[];
}
