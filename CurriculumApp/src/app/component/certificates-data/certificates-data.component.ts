import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Certificate, Experience } from 'src/app/domain/Models';

@Component({
  selector: 'app-certificates-data',
  templateUrl: './certificates-data.component.html',
  styleUrls: ['./certificates-data.component.css']
})
export class CertificatesDataComponent implements OnInit {
  @Input()
  public certificates: Certificate[] = [];

  @Output()
  public certificatesChange = new EventEmitter<Certificate[]>();

  public selectedItems: Certificate[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

  create() {
    let length = this.certificates.length;
    if (length > 0) {
      let certificate: Certificate = this.certificates[length-1];
      if (certificate.address && certificate.startDate && certificate.name &&
        certificate.description  ) {
        this.certificates.push(new Certificate());
        this.toEmit();
      }else{
        this.messageService.add({severity:'warn', summary:'Falha ao adicionar', detail:'Preencha os campos obrigatórios.'});
      }
    }else{
      this.certificates.push(new Certificate());
      this.toEmit();
    }
  }

  deleteItem() {
    this.selectedItems.forEach((exp, index) => {
      this.certificates.splice(index, 1);
    });
    this.toEmit();

  }


  toEmit(){
    this.certificatesChange.emit(this.certificates);
  }

}
