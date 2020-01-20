import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface IPizzaIngredient {
  id: string;
  type: string;
  items: string;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaIngredientsService {
  
  private url: string = environment.url + "/pizza-ingredient";
  constructor(private http: HttpClient) {}

  save(pizza: IPizzaIngredient): Observable<IPizzaIngredient> {
    return this.http.post<IPizzaIngredient>(this.url, pizza);
  }

  update(pizza: IPizzaIngredient): Observable<IPizzaIngredient> {
    return this.http.put<IPizzaIngredient>(this.url, pizza);
  }

  findById(pizzaId: string): Observable<IPizzaIngredient> {
    return this.http.get<IPizzaIngredient>(`${this.url}/${pizzaId}`);
  }

  findAll(): Observable<IPizzaIngredient[]> {
    return this.http.get<IPizzaIngredient[]>(this.url);
  }

  delete(pizzaId: string): void {
    this.http.delete(`${this.url}/${pizzaId}`).subscribe();
  }

}