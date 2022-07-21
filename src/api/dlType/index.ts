import {service} from "../index";

export function findAll(){
    return service.get({
        url: '/dlType/findAll'
    })
}