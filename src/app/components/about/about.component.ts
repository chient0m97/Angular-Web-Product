import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BaseComponent } from '../base.component';
import { fetchAboutRequested } from './about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
  public reducer: String = 'About';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.store.dispatch(fetchAboutRequested(this.queryParser.parse(['search'], activatedRoute)));
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  mapStateToProps(state) {
    return {
      payload: state.About
    };
  }

  mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
}
