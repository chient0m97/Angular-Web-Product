import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_LIST_PRODUCTS_REQUESTED, fetchProductsSuccessed } from './products.actions';
import { AppInjector } from '../../app-injector';
import { ApiService } from '../../api/api.service';
import { API_CALL_ERROR } from '../../store/action';

function* watchFetchListProductsRequest() {
    yield takeLatest(FETCH_LIST_PRODUCTS_REQUESTED, function* (action: any) {
    //   const router = AppInjector.get(Router);
      try {
        const result = yield AppInjector.get(ApiService).products.get(action.data).toPromise();
        yield put(fetchProductsSuccessed({items: result.items, pagination: result.pagination}));
        // router.navigate(listProducts());
      } catch (e) {
        yield put({ type: API_CALL_ERROR, error: e });
      }
    });
  }

  export default [watchFetchListProductsRequest];
