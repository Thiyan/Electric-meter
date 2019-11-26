import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as _ from "lodash";

import * as Plotly from "plotly.js";

@Component({
  selector: "app-temp-graph",
  templateUrl: "./temp-graph.component.html",
  styleUrls: ["./temp-graph.component.css"]
  // template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>'
})
export class TempGraphComponent implements OnInit {
  @ViewChild("chart") el: ElementRef;

  a = [1, 2, 3];
  b = [1, 2, 4];
  c = 3;
  d = 4;

  data = [
    {
      x: this.a,
      y: this.b
    }
  ];
  style;
  element;

  constructor() {}

  ngOnInit() {
    this.element = this.el.nativeElement;
    this.basicChart();
  }

  basicChart() {
    // const element = this.el.nativeElement;

    this.style = {
      margin: { t: 0 }
    };

    Plotly.newPlot(this.element, this.data, this.style);
  }

  onClick() {
    console.log("Button Clicked");
    this.c += 1;
    this.d *= 3;
    this.a.push(this.c);
    this.b.push(this.d);
    this.basicChart();
  }
}
