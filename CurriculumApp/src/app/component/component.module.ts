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


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [

    YearsPipe,
    InitialsPipe,

    TemplateOneComponent,
    ConfigurationComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
    CurriculumGeneratorComponent,
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
    CurriculumGeneratorComponent,
    YearsPipe,
    InitialsPipe,


    //prime NG
  ],
  providers: [SystemService]
})
export class ComponentModule { }
