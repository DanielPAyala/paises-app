import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get params() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private _http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    return this._http.get<Country[]>(url, { params: this.params });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this._http.get<Country[]>(url, { params: this.params });
  }

  getPaisByCode(id: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country[]>(url);
  }

  buscarPorRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;
    return this._http.get<Country[]>(url, { params: this.params });
  }
}
