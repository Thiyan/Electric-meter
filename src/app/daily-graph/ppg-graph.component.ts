import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { delay } from "rxjs/operators";
import { NgForm } from "@angular/forms";
import { DailyRedingsService } from "./daily-redings.service";
import { from } from "rxjs";

@Component({
  selector: "app-ppg-graph",
  templateUrl: "./ppg-graph.component.html",
  styleUrls: ["./ppg-graph.component.css"]
})
export class PpgGraphComponent implements OnInit {
  @ViewChild("lineChart")
  private chartRef;
  chart: any;
  a = 36.5;

  dataPoints = [];

  constructor(private service: DailyRedingsService) {}

  ngOnInit() {
    this.draw();
    this.add();
  }

  onSubmit(f: NgForm) {
    console.log(f.value.date);

    this.service.getReadings(f.value.date).subscribe(
      response => {
        if (JSON.parse(JSON.stringify(response)).statusCode === "S1000") {
          this.dataPoints = JSON.parse(JSON.stringify(response))["content"];
          this.chart.update();
          console.log(this.dataPoints);
        } else {
          // alert(JSON.parse(JSON.stringify(response)).statusDescription);
          if (JSON.parse(JSON.stringify(response)).statusCode === "E1003") {
            alert("No results Found");
          } else {
            alert("An unexpected error occurred");
          }
        }
      },
      error => {
        alert("An unexpected error occurred");
      }
    );
  }

  // add(data) {
  //   this.dataPoints.push({ x: new Date(), y: 400 });
  //   this.chart.update();
  // }
  add() {
    delay(20000);
    this.dataPoints.push({ x: new Date(), y: 400 });
    this.chart.update();
    delay(20000);

    this.dataPoints.push({ x: new Date(), y: 337 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 573 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 445 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 650 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 720 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 448 });
    this.chart.update();
    delay(2000);

    this.dataPoints.push({ x: new Date(), y: 589 });
    this.chart.update();
    delay(2000);
  }

  draw() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "line",

      data: {
        // labels: ["1", "2"], // your labels array
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
          text: "Daily reading",
          position: "top",
          fontSize: 25,
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial',sans-serif",
          fontColor: "#666",
          padding: 20
        },

        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              display: true,
              // distribution: "series",
              bounds: "data",
              type: "time",
              ticks: {
                autoSkip: true,
                maxTicksLimit: 20
              }
              // time: {
              //   // unit: "millisecond"
              //   // format: "timeFormat"
              // }
            }
          ],
          yAxes: [
            {
              // display: true
              // ticks: {
              //   max: 1,
              //   min: -1
              // }
            }
          ]
        },
        elements: {}
      }
    });
  }
}
