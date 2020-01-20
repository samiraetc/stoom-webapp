import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface IPizza {
  id: string;
  name: string;
  size: string,
  dough: string,
  ingredients: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {
  private url: string = environment.url + "/pizza-order";
  
  constructor(private http: HttpClient) {}

  save(pizza: IPizza): Observable<IPizza> {
    return this.http.post<IPizza>(this.url, pizza);
  }

  update(pizza: IPizza): Observable<IPizza> {
    return this.http.put<IPizza>(this.url, pizza);
  }

  findById(pizzaId: string): Observable<IPizza> {
    return this.http.get<IPizza>(`${this.url}/${pizzaId}`);
  }

  findAll(): Observable<IPizza[]> {
    return this.http.get<IPizza[]>(this.url);
  }

  delete(pizzaId: string): void {
    this.http.delete(`${this.url}/${pizzaId}`).subscribe();
  }
}
