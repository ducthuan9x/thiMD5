import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tuor} from "./model/tuor";
const API_URl='http://localhost:3000/tuors';
@Injectable({
  providedIn: 'root'
})
export class TuorService {

  constructor(private httpClient: HttpClient ) { }
  // @ts-ignore
  getAll():Observable<Tuor[]>{
    // @ts-ignore
    return this.httpClient.get<Tuor[]>(API_URl)
  }
  saveTuor(tuor:Tuor):Observable<Tuor>{
    return this.httpClient.post<Tuor>(API_URl, tuor);
  }
  getById(id: string):Observable<Tuor>{
    return this.httpClient.get<Tuor>(API_URl+`/${id}`);
  }
  editTour(id:string,tuor:Tuor): Observable<Tuor>{
    return this.httpClient.put<Tuor>(API_URl+`/${id}`,tuor);
  }
  delete(id:any): Observable<Tuor>{
    return this.httpClient.delete<Tuor>(API_URl+`/${id}`);
  }
}
