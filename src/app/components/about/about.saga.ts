import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_LIST_ABOUT_REQUESTED, fetchAboutSuccessed } from './about.actions';
import { AppInjector } from '../../app-injector';
import { ApiService } from '../../api/api.service';
import { API_CALL_ERROR } from '../../store/action';

function* watchFetchListAboutRequest() {
    yield takeLatest(FETCH_LIST_ABOUT_REQUESTED, function* (action: any) {
    //   const router = AppInjector.get(Router);
      try {
        const result = yield AppInjector.get(ApiService).about.get(action.data).toPromise();
        yield put(fetchAboutSuccessed({items: result.items, pagination: result.pagination}));
        // router.navigate(listAbout());
      } catch (e) {
        yield put({ type: API_CALL_ERROR, error: e });
      }
    });
  }

  export default [watchFetchListAboutRequest];
