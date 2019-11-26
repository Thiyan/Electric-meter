import { MqttDataService } from "./services/mqtt-data.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "senzgraph";

  constructor() {}

  // send() {
  //   this.mqttDataService.sendMessage();
  // }
}
