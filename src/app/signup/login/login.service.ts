import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url = "http://localhost:8080/login";

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "get.auth_token"
    })
  };

  add(f: NgForm): Observable<Object> {
    const input = new FormData();

    input.append("user", f.value.user);
    input.append("password", f.value.password);

    console.log(input.get("user"));
    console.log(input.get("password"));

    return this.http.post(this.url, input);
  }
}
