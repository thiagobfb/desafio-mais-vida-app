import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';

import { MedicoMySuffix } from './medico-my-suffix.model';

@Injectable()
export class MedicoMySuffixService {
    private resourceUrl = Api.API_URL + '/medicos';

    constructor(private http: HttpClient) { }

    create(medico: MedicoMySuffix): Observable<MedicoMySuffix> {
        return this.http.post(this.resourceUrl, medico);
    }

    update(medico: MedicoMySuffix): Observable<MedicoMySuffix> {
        return this.http.put(this.resourceUrl, medico);
    }

    find(id: number): Observable<MedicoMySuffix> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
