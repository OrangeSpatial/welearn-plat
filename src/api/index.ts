import ORequest from "./request";
import {API_BASE_URL, TIME_OUT} from "./config";
import router from "../router";

export const service = new ORequest({
    baseURL: API_BASE_URL,
    timeout: TIME_OUT,
    interceptorHooks: {
        requestInterceptor: (config) => {
            const Authorization = window.sessionStorage.getItem("Authorization")
            const reg = new RegExp("^((/user/register)|(/hello)|(/dlType/findAll)|(/image/getImageUrlsByTagOrType)).*");
            if (Authorization === null && !reg.test(<string>config.url)) {
                router.push("/login").catch((err) => err);
            }
            // @ts-ignore
            config.headers.Authorization = Authorization as string;
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            console.log(res)
            return res
        },
        responseInterceptorCatch: (err) => {
            return err
        }
    }
})