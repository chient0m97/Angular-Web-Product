import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BaseComponent } from '../base.component';
import { fetchNewsRequested } from './news.actions';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends BaseComponent implements OnInit {
  public reducer: String = 'News';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.store.dispatch(fetchNewsRequested(this.queryParser.parse(['search'], activatedRoute)));
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  mapStateToProps(state) {
    return {
      payload: state.News
    };
  }

  mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
}
