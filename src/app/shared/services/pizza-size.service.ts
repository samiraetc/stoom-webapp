import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface IPizzaSize {
  id: string;
  day: string;
  promo: string
}

@Injectable({
  providedIn: 'root'
})
export class PizzaSizeService {
  private url: string = environment.url + "/pizza-size";

  constructor(private http: HttpClient) { }

  save(pizza: IPizzaSize): Observable<IPizzaSize> {
    return this.http.post<IPizzaSize>(this.url, pizza);
  }

  update(pizza: IPizzaSize): Observable<IPizzaSize> {
    return this.http.put<IPizzaSize>(this.url, pizza);
  }

  findById(pizzaId: string): Observable<IPizzaSize> {
    return this.http.get<IPizzaSize>(`${this.url}/${pizzaId}`);
  }

  findAll(): Observable<IPizzaSize[]> {
    return this.http.get<IPizzaSize[]>(this.url);
  }

  delete(pizzaId: string): void {
    this.http.delete(`${this.url}/${pizzaId}`).subscribe();
  }
}