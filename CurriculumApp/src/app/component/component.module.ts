import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CertificatesDataComponent } from "./certificates-data/certificates-data.component";
import { EducationDataComponent } from "./education-data/education-data.component";
import { ExperienceDataComponent } from "./experience-data/experience-data.component";
import { PersonalDataComponent } from "./personal-data/personal-data.component";
import { SystemConfigurationComponent } from "./system-configuration/system-configuration.component";

import {DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';

import { MessageService } from "primeng/api";
import { TableKeyValueComponent } from "./table-key-value/table-key-value.component";
import { CurriculumGeneratorComponent } from "./curriculum-generator/curriculum-generator.component";
import { YearsPipe } from "../pipe/years.pipe";
import { Template1Component } from "./template1/template1.component";
import {RatingModule} from 'primeng/rating';


@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
    PersonalDataComponent,
    CertificatesDataComponent,
    ExperienceDataComponent,
    EducationDataComponent,
    SystemConfigurationComponent,
    CurriculumGeneratorComponent,
    TableKeyValueComponent,
    Template1Component,
    
    YearsPipe
	],
	imports: [
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
    RatingModule,

    //PrimeNG
    DropdownModule,
    TableModule,
    CheckboxModule,
    ToolbarModule,
    ToastModule,
    CalendarModule,
    AccordionModule,
	],
	exports: [
    //Components
    PersonalDataComponent,
    CertificatesDataComponent,
    ExperienceDataComponent,
    EducationDataComponent,
    SystemConfigurationComponent,
    TableKeyValueComponent,
    CurriculumGeneratorComponent,
    Template1Component,

    //PrimeNG
    DropdownModule,
    TableModule,
    CheckboxModule,
    ToolbarModule,
    ToastModule,
    CalendarModule,
    AccordionModule,
    
    RatingModule,

    YearsPipe
	],
  providers: [
    MessageService
  ]
})
export class ComponentModule { }