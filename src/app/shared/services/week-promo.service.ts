import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface IWeekPromo {
  id: string;
  day: string;
  promo: Object;
}

@Injectable({
  providedIn: 'root'
})
export class WeekPromoService {
  private url: string = environment.url + "/week-promo";

  constructor(private http: HttpClient) { }

  save(weekPromo: IWeekPromo): Observable<IWeekPromo> {
    return this.http.post<IWeekPromo>(this.url, weekPromo);
  }

  update(weekPromo: IWeekPromo): Observable<IWeekPromo> {
    return this.http.put<IWeekPromo>(this.url, weekPromo);
  }

  findById(weekPromoId: string): Observable<IWeekPromo> {
    return this.http.get<IWeekPromo>(`${this.url}/${weekPromoId}`);
  }

  findAll(): Observable<IWeekPromo[]> {
    return this.http.get<IWeekPromo[]>(this.url);
  }

  delete(weekPromoId: string): void {
    this.http.delete(`${this.url}/${weekPromoId}`).subscribe();
  }

}