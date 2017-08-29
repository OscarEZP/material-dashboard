///<reference path="../../../node_modules/moment/moment.d.ts"/>
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as moment from 'moment';
import {EstadisticasServices} from '../services/EstadisticasServices';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
  providers: [EstadisticasServices],
})
export class EstadisticasComponent implements OnInit {
  momentValue: any;
  totalImpacts: any;
  month: any;

  constructor(private estadisticasServices: EstadisticasServices) { }
  ngOnInit() {}

  public setMoment(month: any) {
    this.month = month;
  };

  public getCharts() {

      this.estadisticasServices.getStadisticsByMonth(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpacts(response),
              error => console.log(error, 'error')
          );

      this.estadisticasServices.getStadisticsByWeek(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpactsWeek(response),
              error => console.log(error, 'error')
          );

      this.estadisticasServices.getStadisticsByFDS(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpactsFDS(response),
              error => console.log(error, 'error')
          );

      this.estadisticasServices.getStadisticsPromDay(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpactsPromDay(response),
              error => console.log(error, 'error')
          );

      this.estadisticasServices.getStadisticsPromDayWeek(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpactsPromDayWeek(response),
              error => console.log(error, 'error')
          );

      this.estadisticasServices.getStadisticsPromDayFDS(moment(this.month).format('M'))
          .subscribe(
              response => this.chartTotalImpactsPromDayFDS(response),
              error => console.log(error, 'error')
          );
  }

    chartTotalImpacts(value: any) {

        const label = [];
        const series = [];
        console.log(value);
        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactos');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 100000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    chartTotalImpactsWeek(value: any) {

        const label = [];
        const series = [];

        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactosweek');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 100000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#totalImpactsWeek',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    chartTotalImpactsFDS(value: any) {

        const label = [];
        const series = [];
        console.log(value, 'qlqchamo');
        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactosfds');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 100000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#chartTotalImpactsFDS',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    chartTotalImpactsPromDay(value: any) {

        const label = [];
        const series = [];

        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactospromday');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 100000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#chartTotalImpactsPromDay',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    chartTotalImpactsPromDayWeek(value: any) {

        const label = [];
        const series = [];

        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactospromdayweek');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 10000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#chartTotalImpactsPromDayWeek',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    chartTotalImpactsPromDayFDS(value: any) {

        const label = [];
        const series = [];

        if (value.length > 0) {

            for (const total of value) {
                label.push(total['rasp_id']);
                series.push(total['total']);
                const dataChart = {labels: label, series: [series]};
                this.totalImpacts = dataChart;
            }
        }else {
            const dataChart = {labels: [], series: []};
            this.totalImpacts = dataChart;
        }
        console.log(this.totalImpacts, 'totaldeimpactospromdayfds');
        const optionsTotalImpactsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 3000,
            chartPadding: { top: 0, right: 100, bottom: 0, left: 10}
        };
        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const emailsSubscriptionChart = new Chartist.Bar('#chartTotalImpactsPromDayFDS',
            this.totalImpacts, optionsTotalImpactsChart, responsiveOptions);
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }

    startAnimationForBarChart(chart) {
        let seq2: any, delays2: any, durations2: any;

        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function(data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq2 = 0;
    };
}
