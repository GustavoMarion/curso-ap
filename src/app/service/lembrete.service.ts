import { HttpClient } from '@angular/commom/http/';


import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Lembrete } from '../interface/lembrete';



@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }



getListaLembretes(): Observable<Lembrete[]> {
  const url = `${environment.lembretesApiUrl}/lembrete`;
  return this.http.get<Lembrete>(url);
}


  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrte(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = ` ${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

  }
