import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})

const baseUrl = environment.baseUrl + '/customers';

export class ProductService implements BaseService<Product> {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  findById(id: number): Observable<Object> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  save(data: Product): Observable<Object> {
    return this.http.post(baseUrl, data);
  }
  updateById(id: number, data: Product): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deleteById(id: number): Observable<Object> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
