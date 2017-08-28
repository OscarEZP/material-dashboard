import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  momentValue: any;
  constructor() { }

  ngOnInit() {
  }

  public setMoment(moment: any): any {
    console.log(moment);
  };
}
