import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BlockchainModel} from '../blockchain/blockchain.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {REMOVE_COIN} from '../blockchain.reducer';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  coins$: Observable<BlockchainModel[]>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.coins$ = this.store.pipe(select(state => state.blockchain));
  }

  removeCoin(payload) {
    if (confirm(`Are you sure to delete the coin ${payload.name}`)) {
      this.store.dispatch({
        type: REMOVE_COIN,
        payload: payload
      });
    }
  }

}
