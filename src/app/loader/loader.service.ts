import { Injectable } from '@angular/core';


@Injectable()
export class LoaderService {

    loaderShow: boolean;
    constructor() { }


    show() {
       return this.loaderShow = true;
    }

    hide() {
        return this.loaderShow = false;
    }

}