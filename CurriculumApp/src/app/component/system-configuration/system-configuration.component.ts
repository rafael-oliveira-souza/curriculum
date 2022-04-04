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
    { name: "Blue", code: "#0000ff" },
    { name: "Yellow", code: "#ffff00" },
    { name: "Red", code: "#ff0000" },
    { name: "Green", code: "#008000" },
    { name: "Purple", code: "#800080" },
    { name: "Black", code: "#000000" },
    { name: "Darkorange", code: "#ff8c00" },
    { name: "Silver", code: "#c0c0c0" },
    { name: "Gray", code: "#808080" },
    { name: "White", code: "#ffffff" },
    { name: "Maroon", code: "#800000" },
    { name: "Fuchsia", code: "#ff00ff" },
    { name: "Lime", code: "#00ff00" },
    { name: "Olive", code: "#808000" },
    { name: "Navy", code: "#000080" },
    { name: "Teal", code: "#008080" },
    { name: "Aqua", code: "#00ffff" },
    { name: "Antiquewhite", code: "#faebd7" },
    { name: "Aquamarine", code: "#7fffd4" },
    { name: "Azure", code: "#f0ffff" },
    { name: "Beige", code: "#f5f5dc" },
    { name: "Bisque", code: "#ffe4c4" },
    { name: "Blanchedalmond", code: "#ffebcd" },
    { name: "Blueviolet", code: "#8a2be2" },
    { name: "Brown", code: "#a52a2a" },
    { name: "Burlywood", code: "#deb887" },
    { name: "Cadetblue", code: "#5f9ea0" },
    { name: "Chartreuse", code: "#7fff00" },
    { name: "Chocolate", code: "#d2691e" },
    { name: "Coral", code: "#ff7f50" },
    { name: "Cornflowerblue", code: "#6495ed" },
    { name: "Cornsilk", code: "#fff8dc" },
    { name: "Crimson", code: "#dc143c" },
    { name: "Cyan", code: "#00ffff" },
    { name: "Darkblue", code: "#00008b" },
    { name: "Darkcyan", code: "#008b8b" },
    { name: "Darkgoldenrod", code: "#b8860b" },
    { name: "Darkgray", code: "#a9a9a9" },
    { name: "Darkgreen", code: "#006400" },
    { name: "Darkgrey", code: "#a9a9a9" },
    { name: "Darkkhaki", code: "#bdb76b" },
    { name: "Darkmagenta", code: "#8b008b" },
    { name: "Darkolivegreen", code: "#556b2f" },
    { name: "Darkorchid", code: "#9932" }
  ];


  public selectedColors: Color = this.colors[0];

  constructor() { }

  ngOnInit() {
    this.emitColor();
  }


  emitColor(){
    this.configurationChange.emit(new Configuration(this.selectedColors));
  }

}
