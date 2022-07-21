import {AxiosRequestConfig, AxiosResponse} from "axios";

export interface InterceptorHooks {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (error: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
    showLoading?: boolean;
    interceptorHooks?: InterceptorHooks;
}

export interface ILoadingInstance {
    setText: (text: string) => void;
    removeElLoadingChild: () => void;
    close: () => void;
    handleAfterLeave: () => void;
    vm: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
    $el: HTMLElement;
    originalPosition: import("vue").Ref<string>;
    originalOverflow: import("vue").Ref<string>;
    visible: import("vue").Ref<boolean>;
    background: import("vue").Ref<string>;
    svg: import("vue").Ref<string>;
    svgViewBox: import("vue").Ref<string>;
    spinner: import("vue").Ref<string | boolean>;
    text: import("vue").Ref<string>;
    fullscreen: import("vue").Ref<boolean>;
    lock: import("vue").Ref<boolean>;
    customClass: import("vue").Ref<string>;
    target: import("vue").Ref<HTMLElement>;
    beforeClose?: import("vue").Ref<(() => boolean) | undefined> | undefined;
    closed?: import("vue").Ref<(() => void) | undefined> | undefined;
}