import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LanguageLevel } from 'src/app/domain/Enums';
import { KeyValue, Personal } from 'src/app/domain/Models';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  val: number = 3;
  @Input()
  public personal: Personal = new Personal();

  @Output()
  public personalChange = new EventEmitter<Personal>();

  public languages = Object.values(LanguageLevel);
  
  public knowledge: KeyValue<string, string> = new KeyValue("", "");
  public language: KeyValue<string, LanguageLevel> = new KeyValue("", LanguageLevel.NONE);
  public contact: KeyValue<string, string> = new KeyValue("", "");
  
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.toEmit();
  }
  
  create(list: any[], item: KeyValue<string, string>) {
    if(item.key && item.value){
      list.push(new KeyValue(item.key, item.value));
      item.key = "";
      item.value = "";
      this.toEmit();
    }else{
      this.messageService.add({severity:'warn', summary:'Falha ao adicionar', detail:'Preencha os campos obrigatórios.'});
    }
  }

  deleteItem(list: any[], index: number) {
    list.splice(index, 1);
    this.toEmit();
  }

  toEmit(){
    this.personalChange.emit(this.personal);
  }

}
