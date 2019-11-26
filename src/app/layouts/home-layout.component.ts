import { Component } from "@angular/core";

@Component({
  selector: "app-home-layout",
  template: `
    <!--<app-employee-nav-bar></app-employee-nav-bar>-->
    <!--<app-manager-nav-bar></app-manager-nav-bar>-->

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent {
  constructor() {}
}
