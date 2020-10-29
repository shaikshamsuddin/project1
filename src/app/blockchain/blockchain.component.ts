// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blockchain',
//   templateUrl: './blockchain.component.html',
//   styleUrls: ['./blockchain.component.css']
// })
// export class BlockchainComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Blockchain } from './blockchain.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import {Router} from "@angular/router"

@Component({
    selector: 'app-blockchain',
     templateUrl: './blockchain.component.html',
   styleUrls: ['./blockchain.component.css']
   })
   export class BlockchainComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder,public router:Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addCoin(name, price) {
    console.log('x');
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain> {
        name: name,
        price: price
      }
    });
  }
public fetch(){
  this.router.navigate['/app-display']
}
  ngOnInit() {
  }

}
