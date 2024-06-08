import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/domain/Contants';
import { Curriculum, Certificate, Personal, Experience, Education } from 'src/app/domain/Models';
import { DateUtils } from 'src/app/domain/Utils';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit {
  @ViewChild('content', { static: false })
  content: ElementRef | any;

  @Input("width")
  width = "100%";

  @Input("height")
  height = "100%";

  configScreen: { height: string, width: string } = { width: this.width, height: this.height };
  curriculum: Curriculum = Constants.curriculum();
  personal: Personal | null = null;
  certificates: Certificate[] = [];
  experiences: Experience[] = [];
  educations: Education[] = [];

  fontConfig: { fontFamily: string } = { fontFamily: Constants.getFontString(this.curriculum.configurations.font) };
  config: { background: string } = { background: this.curriculum.configurations.color.code };  
  colorPrimary: { color: string } = { color: Constants.colors[0].code };
  backgroundSecundary: { background: string } = { background: Constants.colors[0].code };
  lastLanguage = Constants.languages[0].code;
  labels: any = Constants.getLabels(this.curriculum.configurations.language.code);


  @Output()
  htmlChange = new EventEmitter<string>();


  constructor(public systemService: SystemService) {
    this._updateCurriculum();
  }

  ngOnInit() {
    this.systemService.getCurriculum()
      .subscribe(curr => {
        this.curriculum = curr;
        this._updateCurriculum(this.curriculum );
      });
  }

  ngAfterViewChecked(): void {
    let content = this.content.nativeElement;
    this.htmlChange.emit(content);
  }

  private _updateCurriculum(curriculum= this.systemService.getActualCurriculum() ) {
    // let curriculum = CurriculumGabriel.get();
    // let curriculum = CurriculumRafael.get();
    // let curriculum = CurriculumFlavia.get();
    this.defineconfiguration();
    // this.translateCurriculum(curriculum);

    this.personal = curriculum.personal;
    this.certificates = curriculum.certificates;
    this.experiences = curriculum.experiences;
    this.educations = curriculum.educations;
    this.curriculum = curriculum;
    this.labels = Constants.getLabels(this.curriculum.configurations.language.code);

  }

  defineconfiguration() {
    let configuration = this.curriculum.configurations;

    if (configuration) {
      let bg: any = configuration.color.code;
      let font: string = Constants.getFontString(configuration.font);
      this.config = { background: bg };
      this.fontConfig = { fontFamily: font };
      this.colorPrimary = { color: bg };
      this.backgroundSecundary = { background: this.hexToRgb(`#000000`, 0.3) };
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
