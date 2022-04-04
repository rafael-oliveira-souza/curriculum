import { Component } from '@angular/core';
import { Certificate, Configuration, Curriculum, Education, Experience, Personal } from './domain/Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CurriculumApp';
  curriculum = new Curriculum();

  updatePersonalData(personal: Personal) {
    this.curriculum.personal = personal;

  }
  updateEducations(educations: Education[]) {
    this.curriculum.educations = educations;
  }

  updateExperiences(experiences: Experience[]) {
    this.curriculum.experiences = experiences;
  }

  updateCertificates(certificates: Certificate[]) {
    this.curriculum.certificates = certificates;
  }

  updateConfig(config: Configuration) {
    console.log(config)
    this.curriculum.configurations = config;
  }
}
