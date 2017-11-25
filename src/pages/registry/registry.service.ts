import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Registry } from "../../domain/registry";

@Injectable()
export class RegistryService {

    private BASE_URL: string = 'https://aluracar.herokuapp.com/salvarpedido';

    constructor(
        private _http: Http
    ) { }

    doRegistry(registry: Registry) {
        return this._http
            .get(this.BASE_URL, { params: registry })
            .toPromise();
    }
}