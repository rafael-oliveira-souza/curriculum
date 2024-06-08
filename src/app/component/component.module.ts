import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { YearsPipe } from "../pipe/years.pipe";
import { TemplateOneComponent } from './templates/template-one/template-one.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SystemService } from "../service/system.service";
import { TemplateTwoComponent } from './template-two/template-two.component';
import { CurriculumGeneratorComponent } from './curriculum-generator/curriculum-generator.component';
import { TemplateThreeComponent } from './template-three/template-three.component';
import { InitialsPipe } from "../pipe/initials.pipe";
import { TemplateFourComponent } from "./template-four/template-four.component";
import { LanguagePipe } from "../pipe/language.pipe";
import { EducationalStatusPipe } from "../pipe/educational-status.pipe";
import { StarComponent } from "../star/star.component";


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [

    YearsPipe,
    InitialsPipe,
    EducationalStatusPipe,
    LanguagePipe,

    TemplateOneComponent,
    ConfigurationComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
    TemplateFourComponent,
    CurriculumGeneratorComponent,
    StarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    //prime NG
  ],
  exports: [
    //Components
    TemplateOneComponent,
    ConfigurationComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
    TemplateFourComponent,
    CurriculumGeneratorComponent,
    StarComponent,
    
    YearsPipe,
    InitialsPipe,
    EducationalStatusPipe,
    LanguagePipe,


    //prime NG
  ],
  providers: [SystemService]
})
export class ComponentModule { }
