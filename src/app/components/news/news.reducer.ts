import { FETCH_LIST_NEWS_SUCCESSED } from './news.actions';
import * as _ from 'lodash';

export const News = (state = {fetched: false, items: []}, action) => {
  switch (action.type) {
    case FETCH_LIST_NEWS_SUCCESSED:
      return _.assign({}, state, { fetched: true, items: action.data.items, pagination: action.data.pagination });
    default:
      return state;
  }
};
