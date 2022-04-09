import { ElementRef, EventEmitter, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { CurriculumFlavia } from 'src/app/domain/examples/CurriculumFlavia';
import { CurriculumRafael } from 'src/app/domain/examples/CurriculumRafael';
import { Certificate, Configuration, Curriculum, Education, Experience, KeyValue, Personal } from 'src/app/domain/Models';
import { DateUtils } from 'src/app/domain/Utils';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @ViewChild('content', { static: false })
  content: ElementRef | any;

  curriculum: Curriculum = new Curriculum();
  personal: Personal | null = null;
  certificates: Certificate[] = [];
  experiences: Experience[] = [];
  educations: Education[] = [];
  configurations: Configuration | null = null;

  @Output()
  htmlChange = new EventEmitter<string>();

  config: { background: string, fontFamily: string } = { background: 'blue', fontFamily: "Times New Roman, Times, serif" };
  colorPrimary: { color: string } = { color: 'blue' };
  backgroundSecundary: { background: string } = { background: 'blue' };

  constructor(private systemService: SystemService) {
    this.systemService.getCurriculum()
      .subscribe(curriculum => {
        this.curriculum = curriculum;
        this.configurations = curriculum.configurations;
        this._updateCurriculum();
      });
  }

  ngOnInit() {
    this._updateCurriculum();
  }

  private _updateCurriculum() {
    this.curriculum = CurriculumRafael.get();

    this.curriculum.configurations = this.configurations;
    this.personal = this.curriculum.personal;
    this.certificates = this.curriculum.certificates;
    this.experiences = this.curriculum.experiences;
    this.educations = this.curriculum.educations;

    this.defineConfigurations();
  }

  ngAfterViewChecked(): void {
    let content = this.content.nativeElement;
    this.htmlChange.emit(content);
  }

  defineConfigurations() {
    let configuration = this.curriculum?.configurations;
    let bg: any = configuration?.color?.code;
    let font: string = `${configuration?.font?.name}, ${configuration?.font?.sub}, ${configuration?.font?.font}`;
    this.config = { background: bg, fontFamily: font };
    this.colorPrimary = { color: bg };
    this.backgroundSecundary = { background: this.hexToRgb(`#000000`, 0.3) };
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
