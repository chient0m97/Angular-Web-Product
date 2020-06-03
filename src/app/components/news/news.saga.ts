import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_LIST_NEWS_REQUESTED, fetchNewsSuccessed } from './news.actions';
import { AppInjector } from '../../app-injector';
import { ApiService } from '../../api/api.service';
import { API_CALL_ERROR } from '../../store/action';

function* watchFetchListNewsRequest() {
    yield takeLatest(FETCH_LIST_NEWS_REQUESTED, function* (action: any) {
    //   const router = AppInjector.get(Router);
      try {
        const result = yield AppInjector.get(ApiService).news.get(action.data).toPromise();
        yield put(fetchNewsSuccessed({items: result.items, pagination: result.pagination}));
        // router.navigate(listNews());
      } catch (e) {
        yield put({ type: API_CALL_ERROR, error: e });
      }
    });
  }

  export default [watchFetchListNewsRequest];
