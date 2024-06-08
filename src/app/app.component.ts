import { Component, OnInit } from '@angular/core';
import { Constants } from './domain/Contants';
import { CurriculumRafael } from './domain/examples/CurriculumRafael';
import { SystemService } from './service/system.service';
import { CurriculumFlavia } from './domain/examples/CurriculumFlavia';
import { CurriculumFlaviaEN } from './domain/examples/CurriculumFlavia-en';
import { Curriculum } from './domain/Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'curriculumApp';
  public selectedTemplate: number = 2;
  constructor(public systemService: SystemService) {
  }

  public ngOnInit(){
    this.systemService.addCurriculum(Constants.curriculum(CurriculumFlaviaEN.get()));

    this.systemService.getCurriculum()
      .subscribe((curr: Curriculum) => {
        this.selectedTemplate = curr.configurations.selectedTemplate;
      });
  }

}
