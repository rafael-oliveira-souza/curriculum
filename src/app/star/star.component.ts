import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input('avaliacao')
  public avaliacao: number;

  @Input('name')
  public name: string;

  public pontos: Array<boolean> = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.pontos.push(i <= this.avaliacao);
    }
  }

  getName(i: number) {
    return this.name + '_cm_star-' + i;
  }

  getColor(i: boolean) {
    return i ? "#FC0" : "#CCC";
  }
}
