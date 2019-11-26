import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeLoginService} from './employee-login.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  user;
  constructor(private service: EmployeeLoginService, private router: Router) { }

  ngOnInit() {
  }

  submit(f: NgForm) {

    console.log(f.value);
    this.service.add(f).
      subscribe(response => {

        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          this.user = JSON.parse(JSON.stringify(response))['content'];
          console.log(this.user);
          localStorage.setItem('number', this.user.eId);
          localStorage.setItem('name', this.user.fName);
          localStorage.setItem('id', this.user.userId);
          localStorage.setItem('login', 'true');
          // alert('Login successfully');
          this.router.navigate(['']);

          console.log(localStorage.getItem('name'));


        } else {
          // alert(JSON.parse(JSON.stringify(response)).statusDescription);
          console.log(JSON.parse(JSON.stringify(response))['statusDescription']);

            alert(JSON.parse(JSON.stringify(response))['statusDescription']);

        }
      }, error => {
        alert('An unexpected error occurred');
      });

  }

}
