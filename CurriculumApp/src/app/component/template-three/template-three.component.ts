import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/domain/Contants';
import { CurriculumRafael } from 'src/app/domain/examples/CurriculumRafael';
import { Curriculum, Certificate, Personal, Experience, Education } from 'src/app/domain/Models';
import { DateUtils } from 'src/app/domain/Utils';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-template-three',
  templateUrl: './template-three.component.html',
  styleUrls: ['./template-three.component.scss']
})
export class TemplateThreeComponent implements OnInit {

  @ViewChild('content', { static: false })
  content: ElementRef | any;

  @Input("width")
  width = "100%";

  @Input("height")
  height = "100%";

  configTitle: { background: string, color: string } = { background: Constants.colors[0].code, color: Constants.colors[0].code };
  configScreen: { height: string, width: string } = { width: this.width, height: this.height };
  curriculum: Curriculum = Constants.curriculum();
  personal: Personal | null = null;
  certificates: Certificate[] = [];
  experiences: Experience[] = [];
  educations: Education[] = [];
  config: { background: string, fontFamily: string } = { background: this.curriculum.configurations.color.code, fontFamily: Constants.getFontString(this.curriculum.configurations.font) };
  colorPrimary: { color: string } = { color: Constants.colors[0].code };
  backgroundSecundary: { background: string } = { background: Constants.colors[0].code };
  lastLanguage = Constants.languages[0].code;
  labels: any = Constants.getLabels(this.curriculum.configurations.language.code);


  @Output()
  htmlChange = new EventEmitter<string>();


  constructor(public systemService: SystemService) {
    this.systemService.getCurriculum()
      .subscribe(curr => {
        this.curriculum = curr;
        this._updateCurriculum();
      });

  }

  ngOnInit() {
    this._updateCurriculum();
  }

  ngAfterViewChecked(): void {
    let content = this.content.nativeElement;
    this.htmlChange.emit(content);
  }

  private _updateCurriculum() {
    let curriculum = CurriculumRafael.get();
    this.defineconfiguration();
    this.translateCurriculum(curriculum);

    this.personal = curriculum.personal;
    this.certificates = curriculum.certificates;
    this.experiences = curriculum.experiences;
    this.educations = curriculum.educations;
  }

  private translateCurriculum(curriculum: Curriculum) {
    const language = curriculum["configurations"]["language"]["code"];

    if (language) {
      curriculum.experiences.forEach(item => {
        this.systemService.translateList([item.institution, item.description], language)
          .subscribe(r => {
            item.institution = r[0];
            item.description = r[1];
          });
      });

      curriculum.certificates.forEach(item => {
        this.systemService.translateList([item.name], language)
          .subscribe(r => {
            item.name = r[0];
          });
      });

      curriculum.educations.forEach(item => {
        this.systemService.translateList([item.name, item.situation], language)
          .subscribe(r => {
            item.name = r[0];
            item.situation = r[1];
          });
      });

      this.systemService.translateList([curriculum.personal.profile, curriculum.personal.office], language)
        .subscribe(r => {
          curriculum.personal.profile = r[0];
          curriculum.personal.office = r[1];
        });

      curriculum.personal.contacts.forEach(item => {
        this.systemService.translateList([item.key], language)
          .subscribe(r => {
            item.key = r[0];
          });
      });

      curriculum.personal.skills.forEach(item => {
        this.systemService.translateList([item.key], language)
          .subscribe(r => {
            item.key = r[0];
          });
      });

      curriculum.personal.languages.forEach(item => {
        this.systemService.translateList([item.key, item.value], language)
          .subscribe(r => {
            item.key = r[0];
            item.value = r[1];
          });
      });
    }


    this.labels = Constants.getLabels(curriculum.configurations.language.code);
  }

  defineconfiguration() {
    let configuration = this.curriculum.configurations;

    if (configuration) {
      let bg: any = configuration.color.code;
      let font: string = Constants.getFontString(configuration.font);
      this.config = { background: bg, fontFamily: font };
      this.colorPrimary = { color: bg };
      this.backgroundSecundary = { background: this.hexToRgb(`#000000`, 0.3) };
      this.configTitle = { background: this.hexToRgb(`#000000`, 0.3), color: bg };
    }
  }

  hexToRgb(hex: string, percent = 1) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${percent})`
      : "blue";
  }

  getPeriod(date: any, date2: any) {
    return DateUtils.periodInString(date, date2);
  }

  isLinkedIn(key: string | undefined) {
    return key && key.toLowerCase().includes('linkedin');
  }

}
