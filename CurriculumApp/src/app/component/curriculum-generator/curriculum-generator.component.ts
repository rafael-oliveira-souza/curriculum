import { ElementRef, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Curriculum } from 'src/app/domain/Models';

@Component({
  selector: 'app-curriculum-generator',
  templateUrl: './curriculum-generator.component.html',
  styleUrls: ['./curriculum-generator.component.css']
})
export class CurriculumGeneratorComponent implements OnInit {
  @ViewChild('pdfTable') 
  pdfTable: ElementRef | undefined;

  @Input()
  curriculum: Curriculum = new Curriculum();

  showPdf: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  generate(){
    console.log(this.curriculum);
    this.showPdf = true;
  }

}
