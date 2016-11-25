import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {getProducts, addToCart} from '../../actions/products';
import {checkout} from '../../actions/cart';

import {getProductsAsArry, getCalculatedCartList} from '../../reducers';

import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cartList: any;
  products: any;
  actions$ = new Subject<Action>();

  addToCartAction = addToCart;
  checkoutAction = checkout;

  constructor(public navCtrl: NavController, public store: Store<any>) {

      this.products = store.let(getProductsAsArry());
      this.cartList = store.let(getCalculatedCartList());

      this.actions$.subscribe(store);
      this.actions$.next(getProducts());

  }

}
