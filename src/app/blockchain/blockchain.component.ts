import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../app.state';
import {BlockchainModel} from './blockchain.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  angForm: FormGroup;
  title = 'blockchain component';
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }
  ngOnInit() {}
  addCoin(name: string, price: number) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <BlockchainModel> {
        name: name,
        price: price
      }
    });
  }

}
