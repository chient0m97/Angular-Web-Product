export const FETCH_LIST_NEWS_REQUESTED = 'FETCH_LIST_NEWS_REQUESTED';
export const FETCH_LIST_NEWS_SUCCESSED = 'FETCH_LIST_NEWS_SUCCESSED';

export const fetchNewsRequested = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_NEWS_REQUESTED,
        data: payload
    };
};

export const fetchNewsSuccessed = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_NEWS_SUCCESSED,
        data: payload
    };
};
