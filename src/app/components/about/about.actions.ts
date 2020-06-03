export const FETCH_LIST_ABOUT_REQUESTED = 'FETCH_LIST_ABOUT_REQUESTED';
export const FETCH_LIST_ABOUT_SUCCESSED = 'FETCH_LIST_ABOUT_SUCCESSED';

export const fetchAboutRequested = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_ABOUT_REQUESTED,
        data: payload
    };
};

export const fetchAboutSuccessed = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_ABOUT_SUCCESSED,
        data: payload
    };
};
