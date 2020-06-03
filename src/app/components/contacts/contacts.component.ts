import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BaseComponent } from '../base.component';
import { fetchContactsRequested } from './contacts.actions';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent extends BaseComponent implements OnInit {
  public reducer: String = 'Contacts';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.store.dispatch(fetchContactsRequested(this.queryParser.parse(['search'], activatedRoute)));
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  mapStateToProps(state) {
    return {
      payload: state.Contacts
    };
  }

  mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
}
