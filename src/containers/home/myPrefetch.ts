import  { PrefetchService } from 'data-prefetch';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable } from '@angular/core';
import { MyProducer } from './myProducer';


@Injectable()
export class MyPrefetch<T> extends PrefetchService<T> {
    constructor(public producer: MyProducer) {
        super(producer, 50);
    }
}
