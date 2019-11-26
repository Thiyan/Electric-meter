import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription, timer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DailyRedingsService {
  url = "http://localhost;:8080/my-attendance";

  constructor(private http: HttpClient) {}

  getReadings(date): Observable<Object> {
    return this.http.get(this.url, {
      params: {
        date: date
      }
    });
  }
}
