import { Component, Input, OnInit } from '@angular/core';
import { LanguageLevel } from 'src/app/domain/Enums';
import { Curriculum, KeyValue, Personal } from 'src/app/domain/Models';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @Input()
  curriculum: Curriculum = new Curriculum();

  constructor() { }

  ngOnInit() {
    console.log(this.curriculum)
    let personal =  new Personal();
    personal.birthday = new Date("1993-03-17");
    personal.name = "Rafael Souza";
    personal.office = "Analista de Sistemas"
    this.curriculum.personal = personal;

    let contacts: KeyValue<string, string>[] = [];
    let knowledges: KeyValue<string, string[]>[] = [];
    let languages: KeyValue<string, LanguageLevel>[] = [];


    contacts.push(new KeyValue("Endereço", "Águas Lindas-Goiás, 72910-127"));
    contacts.push(new KeyValue("Telefone", "+55(61)99232-2329"));
    contacts.push(new KeyValue("E-mail", "rafaelsoec@gmail.com"));
    contacts.push(new KeyValue("GitHub", "https://github.com/RafaelSoec"));
    contacts.push(new KeyValue("LinkedIn", "https://www.linkedin.com/in/rafael-souza-9a315116a/")); 

    this.curriculum.personal.contacts = contacts;
  }

  defineBackground(){
    return { background: this.curriculum?.configurations?.color?.code };
  }

}
