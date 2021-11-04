import store from "../../store";

export const isHandlerEnabled = (config = {}) => {
    return Object.prototype.hasOwnProperty.call(config, "handlerEnabled") &&
        !config.handlerEnabled ?
        false :
        true;
};

export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        store.dispatch('common/IS_LOADING', true);
        request.headers["Accept-Language"] = "ar";
        request.headers["Content-Type"] = "application/json";
    }
    return request;
};

export const successHandler = (response) => {
    if (isHandlerEnabled(response)) {
        store.dispatch('common/IS_LOADING', false);
    }
    return response;
};

export const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        store.dispatch('common/IS_LOADING', false);
    }
    if (error?.response?.status) {
        switch (error?.response?.status) {
            case 400:
                //do something
                break;
            case 401:
                alert("session expired");
                break;
            case 404:
                alert('page not exist');
                break;
        }
    }
    return Promise.reject(error.response);
};