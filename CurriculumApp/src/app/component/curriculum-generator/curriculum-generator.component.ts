import { ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-generator',
  templateUrl: './curriculum-generator.component.html',
  styleUrls: ['./curriculum-generator.component.css']
})
export class CurriculumGeneratorComponent implements OnInit {
  @ViewChild('content', { static: false })
  content: ElementRef | any;

  showPdf: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  generate() {
    this.showPdf = true;
    window.print();
  }

  // public SavePDF(): void {
  //   let content = this.content.nativeElement;
  //   let name = this?.curriculum?.personal?.name;

  //   const doc = new jsPDF();
  //   doc.text(content.firstChild.innerHTML, 10, 10);
  //   doc.save( name ? name : "Curriculum" + ".pdf");
  // }
}
