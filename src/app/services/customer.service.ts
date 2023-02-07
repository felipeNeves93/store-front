import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})

const baseUrl = environment.baseUrl + '/customers';

export class CustomerService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  findById(id: number): Observable<Object> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  save(data: Customer): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateById(id: number, data: Customer): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
