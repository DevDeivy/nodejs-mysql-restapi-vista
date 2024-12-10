import { Injectable } from '@angular/core';
import { ApiLink } from './ApiLink';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url: String;

  constructor(private http: HttpClient) {
    this.url = ApiLink.url;
  }

  getEmployees():Observable<any>{
    return this.http.get(`${this.url}employees`)
  }

  deleteEmployee(id: number):Observable<any>{
    return this.http.delete(`${this.url}employees/${id}`)
  }

  createEmployee(id:string, name: string, salary: string):Observable<any>{
    return this.http.post(`${this.url}employees`, {id, name, salary})
  }

  updateEmployee(id: string, name: string, salary: string):Observable<any>{
    return this.http.patch(`${this.url}employees/${id}`, {name, salary})
  }
}
