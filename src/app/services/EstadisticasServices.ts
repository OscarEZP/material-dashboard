import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import {URL_BACKEND} from '../commons/base_url';

@Injectable()
export class EstadisticasServices {
    public url: string;
    header: Headers;
    private headers = new Headers({'Content-Type': 'application/json'});
    private response: Response;
    loadedCharacter: {};
    constructor(private http: Http) {}

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getStadistics(month: any) {
        this.url = URL_BACKEND;


        const stadisticsByMonth = this.http.post(`${this.url}api/estadisticas`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        const stadisticsByWeek = this.http.post(`${this.url}api/estadisticas`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        const stadisticsByFDS = this.http.post(`${this.url}api/estadisticas/week-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        const stadisticsByPromDay = this.http.post(`${this.url}api/estadisticas/prom-day`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        const stadisticsByPromDayWeek = this.http.post(`${this.url}api/estadisticas/prom-day-without-fds`,
            {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        const stadisticsByPromDayFDS = this.http.post(`${this.url}api/estadisticas/prom-day-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);

        return Observable.forkJoin([stadisticsByMonth, stadisticsByWeek,
            stadisticsByFDS, stadisticsByPromDay, stadisticsByPromDayWeek, stadisticsByPromDayFDS ]);



    }

    getAllData(value: any) {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/month`, {'month': value})
            .map(this.extractData)
            .catch(this.handleError);
    }

    sendExcelStadistics(value: any) {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/generateExcel`, {'data': value}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
/*
    getStadisticsByMonth(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/
/*
    getStadisticsByWeek(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/week-without-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/
/*
    getStadisticsByFDS(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/week-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/
/*
    getStadisticsPromDay(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/prom-day`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/
/*
    getStadisticsPromDayWeek(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/prom-day-without-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/

/*
    getStadisticsPromDayFDS(month: any): Observable<any> {
        this.url = URL_BACKEND;
        return this.http.post(`${this.url}api/estadisticas/prom-day-fds`, {'month': month}, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }
*/
}