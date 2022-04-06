import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/domain/Interfaces';
import { Configuration } from 'src/app/domain/Models';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.component.html',
  styleUrls: ['./system-configuration.component.css']
})
export class SystemConfigurationComponent implements OnInit {

  @Output()
  public configurationChange = new EventEmitter<Configuration>();

  public colors: Color[] = [
    { name: "Blue", code: "#003d69" },
    { name: "Red", code: "#ff0000" },
    { name: "Green", code: "#008000" },
    { name: "Purple", code: "#800080" },
    { name: "Black", code: "#000000" },
    { name: "Gray", code: "#808080" },
    { name: "Maroon", code: "#800000" },
  ];

  fonts: {name: string, sub: string, font: string}[] = [
    {name: "Arial", sub: "Helvetica", font: "sans-serif"},
    {name: "Lucida Console", sub: "Courier New", font: "monospace"},
    {name: "Times New Roman", sub: "Times", font: "serif"}
  ];

  public selectedColors: Color = this.colors[0];
  public selectedFonts: {name: string, sub: string, font: string} = this.fonts[0];

  constructor() { }

  ngOnInit() {
    this.emitConfig();
  }


  emitConfig() {
    console.log(this.selectedColors)
    this.configurationChange.emit(new Configuration(this.selectedColors, this.fonts[2]));
  }

}
