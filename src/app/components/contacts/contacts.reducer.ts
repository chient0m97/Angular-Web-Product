import { FETCH_LIST_CONTACTS_SUCCESSED } from './contacts.actions';
import * as _ from 'lodash';

export const Contacts = (state = {fetched: false, items: []}, action) => {
  switch (action.type) {
    case FETCH_LIST_CONTACTS_SUCCESSED:
      return _.assign({}, state, { fetched: true, items: action.data.items, pagination: action.data.pagination });
    default:
      return state;
  }
};
