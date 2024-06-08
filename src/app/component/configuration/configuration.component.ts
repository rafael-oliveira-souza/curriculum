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
  public selectedTemplate: number = 2;
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
  }


  emitConfig() {
    this.curriculum = this.systemService.getActualCurriculum();
    this.configuration.color = this.colors.filter(r => r.code == this.selectedColor)[0];
    this.configuration.font = this.fonts.filter(r => r.font == this.selectedFont)[0];
    this.configuration.language = this.languages.filter(r => r.code == this.selectedLanguage)[0];
    this.configuration.selectedTemplate = this.selectedTemplate;

    this.curriculum.configurations = this.configuration;
    this.config = {
      background: this.curriculum.configurations.color.code,
      fontFamily: Constants.getFontString(this.curriculum.configurations.font),
    };
    console.log(this.curriculum);
    
    // this.translateCurriculum(this.curriculum);
    this.systemService.addCurriculum(this.curriculum);
  }


  // private translateCurriculum(curriculum: Curriculum) {
  //   const language = curriculum["configurations"]["language"]["code"];

  //   if (language) {
  //     curriculum.experiences.forEach(item => {
  //       this.systemService.translateList([item.institution, item.description], language)
  //         .subscribe(r => {
  //           item.institution = r[0];
  //           item.description = r[1];
  //         });
  //     });

  //     curriculum.certificates.forEach(item => {
  //       this.systemService.translateList([item.name], language)
  //         .subscribe(r => {
  //           item.name = r[0];
  //         });
  //     });

  //     curriculum.educations.forEach(item => {
  //       this.systemService.translateList([item.name, item.situation], language)
  //         .subscribe(r => {
  //           item.name = r[0];
  //           item.situation = r[1];
  //         });
  //     });

  //     this.systemService.translateList([curriculum.personal.profile, curriculum.personal.office], language)
  //       .subscribe(r => {
  //         curriculum.personal.profile = r[0];
  //         curriculum.personal.office = r[1];
  //       });

  //     curriculum.personal.contacts.forEach(item => {
  //       this.systemService.translateList([item.key], language)
  //         .subscribe(r => {
  //           item.key = r[0];
  //         });
  //     });

  //     curriculum.personal.skills.forEach(item => {
  //       this.systemService.translateList([item.key], language)
  //         .subscribe(r => {
  //           item.key = r[0];
  //         });
  //     });

  //     curriculum.personal.languages.forEach(item => {
  //       this.systemService.translateList([item.key, item.value], language)
  //         .subscribe(r => {
  //           item.key = r[0];
  //           item.value = r[1];
  //         });
  //     });
  //   }
  // }
}
