import { FETCH_LIST_ABOUT_SUCCESSED } from './about.actions';
import * as _ from 'lodash';

export const About = (state = {fetched: false, items: []}, action) => {
  switch (action.type) {
    case FETCH_LIST_ABOUT_SUCCESSED:
      return _.assign({}, state, { fetched: true, items: action.data.items, pagination: action.data.pagination });
    default:
      return state;
  }
};
