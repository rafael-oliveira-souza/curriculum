import { Component } from '@angular/core';
import { Constants } from './domain/Contants';
import { CurriculumRafael } from './domain/examples/CurriculumRafael';
import { SystemService } from './service/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculumApp';
  constructor(public systemService: SystemService) {
    this.systemService.addCurriculum(Constants.curriculum(CurriculumRafael.get()));
  }

}
