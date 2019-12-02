import { delay } from "rxjs/operators";
import { Component, OnInit, ViewChild } from "@angular/core";
import * as Chart from "chart.js";
import { NgForm } from "@angular/forms";
import { MonthlyReadingsService } from "./monthly-readings.service";
import { from } from "rxjs";

@Component({
  selector: "app-tem-graph",
  templateUrl: "./tem-graph.component.html",
  styleUrls: ["./tem-graph.component.css"]
})
export class TemGraphComponent implements OnInit {
  @ViewChild("lineChart")
  private chartRef;
  chart: any;

  dataPoints = [];

  constructor(private service: MonthlyReadingsService) {}

  ngOnInit() {
    this.draw();
  }
  // onSubmit(f: NgForm) {
  //   console.log(f.value.date);

  //   this.service.getReadings(f.value.date).subscribe(
  //     response => {
  //       if (JSON.parse(JSON.stringify(response)).statusCode === "S1000") {
  //         this.dataPoints = JSON.parse(JSON.stringify(response))["content"];
  //         this.chart.update();
  //         console.log(this.dataPoints);
  //       } else {
  //         // alert(JSON.parse(JSON.stringify(response)).statusDescription);
  //         if (JSON.parse(JSON.stringify(response)).statusCode === "E1003") {
  //           alert("No results Found");
  //         } else {
  //           alert("An unexpected error occurred");
  //         }
  //       }
  //     },
  //     error => {
  //       alert("An unexpected error occurred");
  //     }
  //   );
  // }

  onSubmit(f: NgForm) {
    console.log(f.value.date);

    this.dataPoints.length = 0;
    // this.dataPoints = this.get();
    let list = this.get();

    list.forEach(e => {
      this.dataPoints.push(e);
    });

    this.chart.update();

    console.log(this.dataPoints);
  }
  // get() {
  //   return [
  //     { x: 1, y: 400 },
  //     { x: 2, y: 337 },

  //     { x: 3, y: 573 },

  //     { x: 4, y: 445 },

  //     { x: 5, y: 650 },

  //     { x: 6, y: 720 },

  //     { x: 7, y: 448 },

  //     { x: 8, y: 589 }
  //   ];
  // }

  get() {
    return [400, 337, 573, 445, 650, 720, 448, 589];
  }

  draw() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "line",

      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"], // your labels array
        datasets: [
          {
            data: this.dataPoints, // your data array
            borderColor: "#00AEFF",
            fill: true,
            // backgroundColor: "red",
            // xAxisID="Time",
            borderWidth: 2.5,
            // borderDash:[5,4],
            // borderDashOffset:5,
            // borderCapStyle:"",
            cubicInterpolationMode: "monotone",
            // pointBackgroundColor: "red",
            // pointBorderColor: "black",
            // pointBorderWidth: 0,
            pointRadius: 0,
            // pointStyle: "rectRounded",
            // pointRotation:"45",
            spanGaps: true
            // tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        animation: {
          duration: 250 * 1.5,
          easing: "linear"
        },
        title: {
          display: true,
          text: "Monthly reading",
          position: "top",
          fontSize: 25,
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial',sans-serif",
          fontColor: "#666",
          padding: 20
        },

        legend: {
          display: false
        },

        // scales: {
        //   xAxes: [
        //     {
        //       display: true,
        //       // distribution: "series",
        //       bounds: "data",
        //       type: "number"
        //       // ticks: {
        //       //   max: 30,
        //       //   min: 1,
        //       //   stepSize: 1
        //       // }
        //       // time: {
        //       //   // unit: "millisecond"
        //       //   // format: "timeFormat"
        //       // }
        //     }
        //   ],
        //   yAxes: [
        //     {
        //       // display: true
        //       // ticks: {
        //       //   max: 1,
        //       //   min: -1
        //       // }
        //     }
        //   ]
        // },
        elements: {}
      }
    });
  }
}
