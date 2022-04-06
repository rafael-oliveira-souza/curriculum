import { Component } from '@angular/core';
import { Certificate, Configuration, Curriculum, Education, Experience, Personal } from './domain/Models';
import { SystemService } from './service/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CurriculumApp';
  curriculum = new Curriculum();

  constructor(private systemService: SystemService){
  }

  updatePersonalData(personal: Personal) {
    this.curriculum.personal = personal;
    this.systemService.addCurriculum(this.curriculum);
  }

  updateEducations(educations: Education[]) {
    this.curriculum.educations = educations;
    this.systemService.addCurriculum(this.curriculum);
  }

  updateExperiences(experiences: Experience[]) {
    this.curriculum.experiences = experiences;
    this.systemService.addCurriculum(this.curriculum);
  }

  updateCertificates(certificates: Certificate[]) {
    this.curriculum.certificates = certificates;
    this.systemService.addCurriculum(this.curriculum);
  }

  updateConfig(config: Configuration) {
    this.curriculum.configurations = config;
    this.systemService.addCurriculum(this.curriculum);
  }
}
