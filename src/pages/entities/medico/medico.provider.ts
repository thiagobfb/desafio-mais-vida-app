import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';

import { Medico } from './medico.model';

@Injectable()
export class MedicoService {
    private resourceUrl = Api.API_URL + '/medicos';

    constructor(private http: HttpClient) { }

    create(medico: Medico): Observable<Medico> {
        return this.http.post(this.resourceUrl, medico);
    }

    update(medico: Medico): Observable<Medico> {
        return this.http.put(this.resourceUrl, medico);
    }

    find(id: number): Observable<Medico> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
