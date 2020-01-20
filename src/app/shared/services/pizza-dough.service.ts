import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface IPizzaDough {
  id: string;
  dough: string;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaDoughService {
  private url: string = environment.url + "/pizza-dough";

  constructor(private http: HttpClient) { }

  save(pizza: IPizzaDough): Observable<IPizzaDough> {
    return this.http.post<IPizzaDough>(this.url, pizza);
  }

  update(pizza: IPizzaDough): Observable<IPizzaDough> {
    return this.http.put<IPizzaDough>(this.url, pizza);
  }

  findById(pizzaId: string): Observable<IPizzaDough> {
    return this.http.get<IPizzaDough>(`${this.url}/${pizzaId}`);
  }

  findAll(): Observable<IPizzaDough[]> {
    return this.http.get<IPizzaDough[]>(this.url);
  }

  delete(pizzaId: string): void {
    this.http.delete(`${this.url}/${pizzaId}`).subscribe();
  }

}