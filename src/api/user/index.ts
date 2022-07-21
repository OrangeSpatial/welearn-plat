import {service} from "../index";
import {UserModel} from "../../model/User.model";
import qs from "qs";

export function login(data: UserModel){
    return service.post({
        url: '/login',
        data: qs.stringify(data)
    })
}