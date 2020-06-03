export const FETCH_LIST_PRODUCTS_REQUESTED = 'FETCH_LIST_PRODUCTS_REQUESTED';
export const FETCH_LIST_PRODUCTS_SUCCESSED = 'FETCH_LIST_PRODUCTS_SUCCESSED';

export const fetchProductsRequested = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_PRODUCTS_REQUESTED,
        data: payload
    };
};

export const fetchProductsSuccessed = (payload?) => {
    payload = payload || {};
    return {
        type: FETCH_LIST_PRODUCTS_SUCCESSED,
        data: payload
    };
};
