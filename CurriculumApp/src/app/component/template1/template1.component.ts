import { ElementRef, EventEmitter, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { EducationalSituation, LanguageLevel } from 'src/app/domain/Enums';
import { Certificate, Configuration, Curriculum, Education, Experience, KeyValue, Personal } from 'src/app/domain/Models';
import { DateUtils } from 'src/app/domain/Utils';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @ViewChild('content', { static: false })
  content: ElementRef | any;

  curriculum: Curriculum = new Curriculum();
  personal: Personal | null = null;
  certificates: Certificate[] = [];
  experiences: Experience[] = [];
  educations: Education[] = [];
  configurations: Configuration | null = null;

  @Output()
  htmlChange = new EventEmitter<string>();

  config: { background: string, fontFamily: string } = { background: 'blue', fontFamily: "Times New Roman, Times, serif" };
  colorPrimary: { color: string } = { color: 'blue' };
  backgroundSecundary: { background: string } = { background: 'blue' };

  constructor(private systemService: SystemService) {
    this.systemService.getCurriculum()
      .subscribe(curriculum => {
        console.log(curriculum)
        this.curriculum = curriculum;
        this._updateCurriculum();
      });
  }

  ngOnInit() {
    this._updateCurriculum();
  }

  private _updateCurriculum() {
    let personal = new Personal();
    personal.birthday = new Date("1996-02-20");
    personal.name = "Flávia Dangelo Ferreira Muniz";
    // personal.office = "Analista de Projetos"
    personal.profile = `Historiadora formada pela Universidade de Brasília, migrando para área de gestão de
    projetos. Estou me especializando em métodos ágeis e me pós-graduando em gestão de produtos. Bem organizada, proativa e
    interessada em novos desafios. 
    `;

    this.curriculum.personal = personal;

    let skills: KeyValue<string, number>[] = [];
    let contacts: KeyValue<string, string>[] = [];
    let knowledges: KeyValue<string, string[]>[] = [];
    let languages: KeyValue<string, LanguageLevel>[] = [];


    contacts.push(new KeyValue("Endereço", "Jardim Botânico, Brasília/DF, Cep: 71680-369"));
    contacts.push(new KeyValue("Telefone", "+55(61)99682-5543"));
    contacts.push(new KeyValue("E-mail", "flaviadfmuniz@hotmail.com"));
    contacts.push(new KeyValue("LinkedIn", "https://www.linkedin.com/in/fl%C3%A1via-dangelo-ferreira-muniz-b81339199/"));

    skills.push(new KeyValue("Trabalho em equipe", 5));
    skills.push(new KeyValue("Gestão de equipe", 4));
    skills.push(new KeyValue("Gestão de projetos", 4));
    skills.push(new KeyValue("Organização de Arquivos", 5));
    skills.push(new KeyValue("Liderança", 4));
    skills.push(new KeyValue("Comunicação", 5));
    
    languages.push(new KeyValue("Inglês", LanguageLevel.AVANCADO));
    languages.push(new KeyValue("Francês", LanguageLevel.INTERMEDIARIO));
    languages.push(new KeyValue("Espanhol", LanguageLevel.INICIANTE));
    
    knowledges.push(new KeyValue("Metodologia Ágil", ["Scrum", "Kanban", "Lean", "SAF"]));
    knowledges.push(new KeyValue("Pacote Office", ["Word", "Excel", "PowerPoint"]));
    knowledges.push(new KeyValue("PMBOK", ["Equipe", "Ciclo de vida", "Planejamento", "Incerteza e Ambiguidade"]));

    let educations: Education[] = [];
    educations.push({
      name: "História",
      institution: "Universidade de Brasilia",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("03/03/2016"),
      endDate: new Date("12/12/2020"),
      situation: EducationalSituation.CONCLUIDO
    });
    educations.push({
      name: "Liderança e gestão de pessoas: formar, desenvolver, direcionar e gerenciar uma equipe",
      institution: "FAST MBA Lead",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("05/05/2021"),
      endDate: null,
      situation: EducationalSituation.ANDAMENTO
    });
    educations.push({
      name: "Pós Graduação em Gestão de Produtos",
      institution: "Descomplica",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("03/03/2022"),
      endDate: null,
      situation: EducationalSituation.ANDAMENTO
    });

    let experiences: Experience[] = [];
    experiences.push({
      institution: "Colégio COC Lago Norte",
      address: "Brasilia, Distrito Federal - Brasil",
      office: `Professora Bilíngue`,
      startDate: new Date("01/01/2020"),
      endDate: null,
      description: `
      Responsável por ministrar e planejar aulas de gramática da língua inglesa para os alunos 
      do ensino fundamental II e sou professora regente de inglês para alunos do primeiro
       ano do ensino fundamental 1.`
    });

    experiences.push({
      institution: "GALT Vestibulares",
      address: "Brasilia, Distrito Federal - Brasil",
      office: ` Monitora de História`,
      startDate: new Date("06/06/2019"),
      endDate: new Date("02/02/2020"),
      description: `Resolução de exercícios para os alunos, resolução de provas de vestibulares 
      e revisão de conteúdos aprendidos em sala. `
    });
    experiences.push({
      institution: "Conselho Federal de Engenharia e Agronomia - CONFEA",
      address: "Brasilia, Distrito Federal - Brasil",
      office: `Arquivista - Estágio`,
      startDate: new Date("06/06/2018"),
      endDate: new Date("01/01/2020"),
      description: `
        Classificação e acondicionamento de acervo de acordo com código de
        classificação e a Tabela de Temporalidade de documentos do CONARQ e
        das atividadesfim do CONFEA; Aplicar Tabela de Temporalidade de
        documentos; Localização de documentos no arquivo; Cadastro e
        atualização de dados de documentos em planilhas de controle e no
        Sistema Eletrônico de Informações.`
    });

    experiences.push({
      institution: "Arquivo Central da Universidade de Brasília ",
      address: "Brasilia, Distrito Federal - Brasil",
      office: `Arquivista - Estágio`,
      startDate: new Date("04/04/2017"),
      endDate: new Date("03/03/2018"),
      description: `Manutenção e conservação do arquivo; Descrição e análise documental; 
      Pesquisa e levantamento de dados; Classificação documental. `
    });


    let certificates: Certificate[] = [];
    certificates.push({
      name: "Gestão de Projetos Ágeis",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("03/03/2022"),
      endDate: new Date("04/04/2022"),
      description: `Udemy Academy`
    });

    this.curriculum.certificates = certificates;
    this.curriculum.experiences = experiences;
    this.curriculum.educations = educations;

    this.curriculum.personal.skills = skills;
    this.curriculum.personal.knowledges = knowledges;
    this.curriculum.personal.languages = languages;
    this.curriculum.personal.contacts = contacts;
    this.personal = this.curriculum.personal;
    this.certificates = this.curriculum.certificates;
    this.experiences = this.curriculum.experiences;
    this.educations = this.curriculum.educations;
    this.configurations = this.curriculum.configurations;

    this.defineConfigurations();
  }

  ngAfterViewChecked(): void {
    let content = this.content.nativeElement;
    this.htmlChange.emit(content);
  }

  defineConfigurations() {
    let configuration = this.curriculum?.configurations;
    let bg: any = configuration?.color?.code;
    let font: string = `${configuration?.font?.name}, ${configuration?.font?.sub}, ${configuration?.font?.font}`;
    this.config = { background: bg, fontFamily: font };
    this.colorPrimary = { color: bg };
    this.backgroundSecundary = { background: this.hexToRgb(`#000000`, 0.3) };
  }

  hexToRgb(hex: string, percent = 1) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${percent})`
      : "blue";
  }

  getPeriod(date: any, date2: any) {
    return DateUtils.periodInString(date, date2);
  }

  isLinkedIn(key: string | undefined){
   return key && key.toLowerCase().includes('linkedin');
  }
}
