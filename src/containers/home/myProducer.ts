import  { ProducerService } from 'data-prefetch';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable } from '@angular/core';


@Injectable()
export class MyProducer extends ProducerService {

    constructor(private _http: Http) {
        super();
    }
    public fetchData(): any {
        return Observable.create(obs => {
            this._http.get('/data').subscribe(
                res => {
                    obs.next(res.json());
                    obs.complete();
                },
                err => {
                    obs.error(err);
                });
        });
    }
}
