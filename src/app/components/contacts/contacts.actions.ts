export const FETCH_LIST_CONTACTS_REQUESTED = 'FETCH_LIST_CONTACTS_REQUESTED';
export const FETCH_LIST_CONTACTS_SUCCESSED = 'FETCH_LIST_CONTACTS_SUCCESSED';

export const fetchContactsRequested = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_CONTACTS_REQUESTED,
        data: payload
    };
};

export const fetchContactsSuccessed = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_CONTACTS_SUCCESSED,
        data: payload
    };
};
