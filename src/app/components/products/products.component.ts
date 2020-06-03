import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BaseComponent } from '../base.component';
import { fetchProductsRequested } from './products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  public reducer: String = 'Products';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.store.dispatch(fetchProductsRequested(this.queryParser.parse(['search'], activatedRoute)));
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  mapStateToProps(state) {
    return {
      payload: state.Products
    };
  }

  mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
}
