import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`${this.SERVER_URL}/api/produto`)
  }
}
