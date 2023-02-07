import { Observable } from "rxjs";

export interface BaseService<T> {

  findAll(): Observable<any>;

  findById(id: number): Observable<Object>;

  save(data: T): Observable<Object>;

  updateById(id: number, data: T): Observable<Object>;

  deleteById(id: number): Observable<Object>;
}