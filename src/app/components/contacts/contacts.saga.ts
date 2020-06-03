import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_LIST_CONTACTS_REQUESTED, fetchContactsSuccessed } from './contacts.actions';
import { AppInjector } from '../../app-injector';
import { ApiService } from '../../api/api.service';
import { API_CALL_ERROR } from '../../store/action';

function* watchFetchListContactsRequest() {
    yield takeLatest(FETCH_LIST_CONTACTS_REQUESTED, function* (action: any) {
    //   const router = AppInjector.get(Router);
      try {
        const result = yield AppInjector.get(ApiService).contacts.get(action.data).toPromise();
        yield put(fetchContactsSuccessed({items: result.items, pagination: result.pagination}));
        // router.navigate(listContacts());
      } catch (e) {
        yield put({ type: API_CALL_ERROR, error: e });
      }
    });
  }

  export default [watchFetchListContactsRequest];
