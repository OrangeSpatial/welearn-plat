import {service} from "../index";
import {ImageSetModel} from "../../model/ImageSet.model";

export function saveImageSet(data: ImageSetModel){
    return service.post({
        url: '/imageSet/insert',
        data: data
    })
}