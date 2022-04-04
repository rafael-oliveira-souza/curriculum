import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EducationalSituation } from 'src/app/domain/Enums';
import { Education } from 'src/app/domain/Models';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.css']
})
export class EducationDataComponent implements OnInit {

  @Input()
  public educations: Education[] = [];

  @Output()
  public educationsChange = new EventEmitter<Education[]>();

  public selectedEducations: Education[] = [];

  public educationalSituations: string[] = ['Selecione uma situação'];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.educationalSituations.push(...Object.values(EducationalSituation));
  }

  createNewEducation() {
    let length = this.educations.length;
    if (length > 0) {
      let education: Education = this.educations[length - 1];
      if (education.address && education.startDate && education.institution && education.situation) {
        this.educations.push(new Education());
        this.toEmit();
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Falha ao adicionar', detail: 'Preencha os campos obrigatórios.' });
      }
    } else {
      this.educations.push(new Education());
      this.toEmit();
    }
  }

  deleteEducation() {
    this.selectedEducations.forEach((exp, index) => {
      this.educations.splice(index, 1);
    });
    this.toEmit();

  }

  toEmit() {
    this.educationsChange.emit(this.educations);
  }

}
