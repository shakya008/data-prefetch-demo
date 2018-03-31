import { Component, OnInit } from '@angular/core';
import { MyPrefetch } from './myPrefetch';
import { MyProducer } from './myProducer';
import { Observable } from 'rxjs/Observable';




/**
 * @class
 * This is the parent component of the project which will be user to drive the project
 */
@Component({
  selector: 'home-page',
  templateUrl: './home-page.html',
  providers: [MyPrefetch, MyProducer]
})

export class HomeComponent implements OnInit {
    public data: Array<any> = [];
  constructor(private _myPrefetch: MyPrefetch<any>, private _myProducer: MyProducer) {
    }
    fetchdata() {
        this._myPrefetch.getData(20).subscribe(
            data => {
                this.data = this.data.concat(data);
            });
    }
    ngOnInit() {
        this.fetchdata();
        this.bindWindowScroll().subscribe(
            ev => {
                this.fetchdata();
            });
    }
    loadMore() {
        this.fetchdata();
    }
    public bindWindowScroll(): Observable<any> {
        return  Observable.fromEvent(window, 'scroll') .filter(() => {
            return window.pageYOffset + window.innerHeight >= document.body.scrollHeight;
        });
  }
}
