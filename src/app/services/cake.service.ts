import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from '../models/cake';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private browniesUrl = 'http://localhost:3000/brownies';
  private cakesUrl = 'http://localhost:3000/cakes';
  private cookiesUrl = 'http://localhost:3000/cookies';
  private cupcakesUrl = 'http://localhost:3000/cupcakes';
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getCakes(id?: string): Observable<any> {
    return this.http.get<any>(this.cakesUrl);
  }

  getCakeById(id: string): Observable<Cake> {
    const url = `${this.cakesUrl}/${id}`;
    return this.http.get<Cake>(url);
  }

  getSearchedData(data:any){
    return this.http.get(`http://localhost:3000/cakes/${data}`);
  }
  
  uploadOrderData(data:any){
    return this.http.post('http://localhost:3000/orderDetails',data,{
      observe: 'response',
    });
  }

  getOrderList(){
    return this.http.get('http://localhost:3000/orders'); 
  }
}
