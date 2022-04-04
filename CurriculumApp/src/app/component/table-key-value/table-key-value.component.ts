import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { KeyValue } from 'src/app/domain/Models';

@Component({
  selector: 'app-table-key-value',
  templateUrl: './table-key-value.component.html',
  styleUrls: ['./table-key-value.component.css']
})
export class TableKeyValueComponent implements OnInit {
  @Input()
  public label: string = "";

  @Input()
  public items: KeyValue<any, any>[] = [];

  @Output()
  public itemsChange = new EventEmitter<KeyValue<any, any>[]>();

  public selectedItems: KeyValue<any, any>[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  create() {
    let length = this.items.length;
    if (length > 0) {
      let item: KeyValue<any, any> = this.items[length - 1];
      if (item.key && item.value) {
        this.items.push(new KeyValue(null, null));
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Falha ao adicionar', detail: 'Preencha os campos obrigatórios.' });
      }
    } else {
      this.items.push(new KeyValue(null, null));
    }
  }

  delete() {
    this.selectedItems.forEach((exp, index) => {
      this.items.splice(index, 1);
    });

  }

}
