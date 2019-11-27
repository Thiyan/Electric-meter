import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PlotlyModule } from "angular-plotly.js";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { from } from "rxjs";
import { PpgGraphComponent } from "./daily-graph/ppg-graph.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { SinglePatientComponent } from "./single-device/single-patient.component";

import { TemGraphComponent } from "./monthly-graph/tem-graph.component";
import { UserDetailsComponent } from "./device-details/user-details.component";
import { UserImageComponent } from "./device-image/user-image.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { AuthGuard } from "./oauth.guard";
import { EmployeeLoginComponent } from "./login/employee-login/employee-login.component";
import { LoginComponent } from "./login/login/login.component";

@NgModule({
  declarations: [
    AppComponent,

    PpgGraphComponent,

    SinglePatientComponent,

    TemGraphComponent,
    UserDetailsComponent,
    UserImageComponent,
    NavBarComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    EmployeeLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [{ path: "", component: SinglePatientComponent }]
      },
      {
        path: "",
        component: LoginLayoutComponent,
        children: [{ path: "login", component: LoginComponent }]
      },
      {
        path: "**",
        component: SinglePatientComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
