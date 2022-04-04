import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Experience } from 'src/app/domain/Models';

@Component({
  selector: 'app-experience-data',
  templateUrl: './experience-data.component.html',
  styleUrls: ['./experience-data.component.css']
})
export class ExperienceDataComponent implements OnInit {
  @Input()
  public experiences: Experience[] = [];

  @Output()
  public experiencesChange = new EventEmitter<Experience[]>();

  public selectedItems: Experience[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

  create() {
    let length = this.experiences.length;
    if (length > 0) {
      let experience: Experience = this.experiences[length-1];
      if (experience.address && experience.startDate && experience.institution &&
        experience.description && experience.office  ) {
        this.experiences.push(new Experience());
        this.toEmit();
      }else{
        this.messageService.add({severity:'warn', summary:'Falha ao adicionar', detail:'Preencha os campos obrigatórios.'});
      }
    }else{
      this.experiences.push(new Experience());
      this.toEmit();
    }
  }

  deleteItem() {
    this.selectedItems.forEach((exp, index) => {
      this.experiences.splice(index, 1);
    });
    this.toEmit();

  }

  toEmit(){
    this.experiencesChange.emit(this.experiences);
  }
}
