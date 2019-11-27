import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  id;
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit() {}

  login(f: NgForm) {
    console.log(f.value);

    this.service.add(f).subscribe(
      response => {
        if (JSON.parse(JSON.stringify(response)).success === true) {
          this.id = JSON.parse(JSON.stringify(response))["content"];
          console.log(this.id);
          localStorage.setItem("id", this.id);
          localStorage.setItem("login", "true");
          // alert('Login successfully');
          this.router.navigate([""]);
        } else {
          // alert(JSON.parse(JSON.stringify(response)).statusDescription);

          alert("Invalid user credentials");
        }
      },
      error => {
        alert("An unexpected error occurred");
      }
    );
  }
}
