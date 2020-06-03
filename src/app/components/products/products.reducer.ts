import { FETCH_LIST_PRODUCTS_SUCCESSED } from './products.actions';
import * as _ from 'lodash';

export const Products = (state = {fetched: false, items: []}, action) => {
  switch (action.type) {
    case FETCH_LIST_PRODUCTS_SUCCESSED:
      return _.assign({}, state, { fetched: true, items: action.data.items, pagination: action.data.pagination });
    default:
      return state;
  }
};
