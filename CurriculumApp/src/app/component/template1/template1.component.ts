import { ElementRef, EventEmitter, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { EducationalSituation, LanguageLevel } from 'src/app/domain/Enums';
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
        console.log(curriculum)
        this.curriculum = curriculum;
        this._updateCurriculum();
      });
  }

  ngOnInit() {
    this._updateCurriculum();
  }

  private _updateCurriculum() {
    let personal = new Personal();
    personal.birthday = new Date("1993-03-17");
    personal.name = "Rafael Souza";
    personal.office = "Analista de Sistemas"
    personal.profile = `I am a passionate full stack developer, concerned with efficiency and
    user experience. I believe in simplicity, using modern cutting-edge tools
    as well as best practices.`;

    this.curriculum.personal = personal;

    let contacts: KeyValue<string, string>[] = [];
    let knowledges: KeyValue<string, string[]>[] = [];
    let languages: KeyValue<string, LanguageLevel>[] = [];


    contacts.push(new KeyValue("Endereço", "Águas Lindas-Goiás, 72910-127"));
    contacts.push(new KeyValue("Telefone", "+55(61)99232-2329"));
    contacts.push(new KeyValue("E-mail", "rafaelsoec@gmail.com"));
    contacts.push(new KeyValue("GitHub", "https://github.com/RafaelSoec"));
    contacts.push(new KeyValue("LinkedIn", "https://www.linkedin.com/in/rafael-souza-9a315116a/"));


    let educations: Education[] = [];
    educations.push({
      name: "Engenharia da Computação",
      institution: "Universidade de Brasilia",
      address: "Brasilia, Distrito Federal",
      startDate: new Date(),
      endDate: new Date(),
      situation: EducationalSituation.ANDAMENTO
    });

    let experiences: Experience[] = [];
    experiences.push({
      institution: "Spread Tecnologia",
      address: "Brasilia, Distrito Federal",
      office: `Software Developer`,
      startDate: new Date(),
      endDate: new Date(),
      description: `Currently enrolled with implementations of new
                    features in a Digital Document Signing Tool called
                    DropSigner. Also responsible for writing API code to
                    deliver the system's functionality to the customers. The
                    back-end system is written in C#, front-end in Angular
                    and all the systems are currently using Microsoft's
                    `
    });
    
    let certificates: Certificate[] = [];
    certificates.push({
      name: "Java Foundations",
      address: "Brasilia, Distrito Federal",
      startDate: new Date(),
      endDate: new Date(),
      description: `Oracle`
    });
    this.curriculum.certificates = certificates;
    this.curriculum.certificates.push(certificates[0]);

    this.curriculum.experiences = experiences;
    this.curriculum.experiences.push(experiences[0]);
    
    this.curriculum.educations = educations;
    this.curriculum.educations.push(educations[0]);

    this.curriculum.personal.contacts = contacts;
    this.personal = this.curriculum.personal;
    this.certificates = this.curriculum.certificates;
    this.experiences = this.curriculum.experiences;
    this.educations = this.curriculum.educations;
    this.configurations = this.curriculum.configurations;

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

  getPeriod(date: any, date2: any){
    return DateUtils.periodInString(date, date2);
  }
}
