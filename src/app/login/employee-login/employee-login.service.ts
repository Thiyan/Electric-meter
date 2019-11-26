import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeLoginService {
  // url = 'http://' + host + ':8080/oauth/token';
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

    console.log(input);
    // localStorage.setItem('login', 'true');
    // localStorage.setItem('role', 'EMPLOYEE');
    // this.router.navigate(['']);

    return this.http.post(this.url, input);
    // .subscribe(response => {
    //
    //   console.log(response);
    //   if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
    //     alert('Login successfully');
    //     f.reset();
    //     this.router.navigate(['']);
    //
    //   } else {
    //     alert('An unexpected error occurred');
    //   }
    //   console.log(response);
    // }, error => {
    //   alert('An unexpected error occurred');
    //
    // });
  }

  // add(f: NgForm) {

  // const body: URLSearchParams = new URLSearchParams();
  // body.set('client_id', 'mtitans');
  // body.set('client_secret', 'secret');
  // body.set('grant_type', 'password');
  // body.set('scope', 'read');
  // body.set('username', f.value.user);
  // body.set('password', f.value.password);

  //   console.log(body.toString());
  //   this.http.post(this.url, body.toString() ,this.httpOptions
  //   //   {
  //   //   headers: new HttpHeaders({
  //   //     'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
  //   //   })
  //   // }
  //   ).subscribe(res => {
  //     console.log(res);
  //   });
  // }

  //
  // add(f: NgForm) {
  //
  //   const input = new FormData();
  //
  //   input.append('client_id', 'titans');
  //   input.append('client_secret', 'secret');
  //   input.append('grant_type', 'password');
  //   input.append('scope', 'read');
  //   input.append('username', f.value.user);
  //   input.append('password', f.value.password);
  //
  //
  //   console.log(input);
  //
  //   this.http.post(this.url, input, this.httpOptions)
  //     .subscribe(response => {
  //
  //       console.log(response);
  //       if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
  //         alert('New employee added successfully!');
  //         f.reset();
  //       } else {
  //         alert('An unexpected error occurred');
  //       }
  //       console.log(response);
  //     }, error => {
  //       alert('An unexpected error occurred');
  //
  //     });
  //
  // }
}
