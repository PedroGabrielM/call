import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getTariff() {
    return this.http.get(`${this.SERVER_URL}/api/tarifa`)
  }
}