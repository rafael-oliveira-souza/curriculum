import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/domain/Contants';
import { Color, Font, Language } from 'src/app/domain/Interfaces';
import { Curriculum } from 'src/app/domain/Models';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  public colors: Color[] = Constants.colors;
  public languages: Language[] = Constants.languages;
  public fonts: Font[] = Constants.fonts;

  public selectedColor: string = this.colors[0].code;
  public selectedFont: string = this.fonts[0].font;
  public selectedLanguage: string = this.languages[0].code;
  public configuration = Constants.configuration;
  public config: { background: string, fontFamily: string } = {
    background: this.configuration.color.code,
    fontFamily: Constants.getFontString(this.configuration.font)
  };

  public templates: false;
  public curriculum: Curriculum = new Curriculum();
  public width = "600px";
  public height = "700px";

  configScreen: { height: string, width: string } = { width: this.width, height: this.height };

  constructor(public systemService: SystemService) { }

  ngOnInit() {
    this.systemService.getCurriculum()
      .subscribe(curr => {
        this.curriculum = curr;
      });
  }


  emitConfig() {
    this.configuration.color = this.colors.filter(r => r.code == this.selectedColor)[0];
    this.configuration.font = this.fonts.filter(r => r.font == this.selectedFont)[0];
    this.configuration.language = this.languages.filter(r => r.code == this.selectedLanguage)[0];

    this.curriculum.configurations = this.configuration;
    this.config = {
      background: this.curriculum.configurations.color.code,
      fontFamily: Constants.getFontString(this.curriculum.configurations.font)
    };
    console.log(this.curriculum);
    this.systemService.addCurriculum(this.curriculum);
  }

}
