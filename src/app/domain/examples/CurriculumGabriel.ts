import { Constants } from "../Contants";
import { LanguageLevel, EducationalSituation } from "../Enums";
import { Certificate, Curriculum, Education, Experience, KeyValue, Personal } from "../Models";

export class CurriculumGabriel {

  static get() {
    let curriculum = new Curriculum();
    let personal = new Personal();
    personal.birthday = new Date("1996-11-26");
    personal.name = "Gabriel Oliveira de Souza";
    // personal.office = "Analista de Sistemas Sênior";
    personal.profile = `Profissional extremamente dedicado e focado no trabalho.
    Excelentes capacidades oratória, escrita e raciocínio para resolução de problemas.`;

    curriculum.personal = personal;

    let skills: KeyValue<string, number>[] = [];
    let contacts: KeyValue<string, string>[] = [];
    let knowledges: KeyValue<string, string[]>[] = [];
    let languages: KeyValue<string, LanguageLevel>[] = [];


    contacts.push(new KeyValue("Endereço", "QNL 12 Bloco B Apt 113, Brasilia/DF, Cep: 72156-212")); -
      contacts.push(new KeyValue("Telefone", "+55 (61) 99834-9655 / +55 (61) 99232-2329"));
    contacts.push(new KeyValue("E-mail", "gabriel.cgnt@gmail.com / rafaelsoec@gmail.com"));

    skills.push(new KeyValue("Trabalho em equipe", 5));
    skills.push(new KeyValue("Boa Comunicação", 5));
    skills.push(new KeyValue("Prestatividade", 5));


    languages.push(new KeyValue("Inglês", LanguageLevel.INICIANTE));
    languages.push(new KeyValue("Espanhol", LanguageLevel.INICIANTE));


    let educations: Education[] = [];
    educations.push({
      name: "Agronomia",
      institution: "Centro Universitário ICESP",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("01/03/2021"),
      endDate: null,
      situation: EducationalSituation.ANDAMENTO
    });

    educations.push({
      name: "Biotecnologia",
      institution: "Universidade de Brasilia - UnB",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("01/03/2015"),
      endDate: new Date("01/03/2017"),
      situation: EducationalSituation.TRANCAMENTO
    });

    educations.push({
      name: "Técnico em Logística",
      institution: "Centro Universitário de Brasília - UniCEUB",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("01/03/2013"),
      endDate: new Date("01/03/2015"),
      situation: EducationalSituation.CONCLUIDO
    });

    educations.push({
      name: "Ensino Médio Completo",
      institution: "Cetro de Ensino Médio EIT",
      address: "Brasilia, Distrito Federal",
      startDate: new Date("01/03/2011"),
      endDate: new Date("01/03/2013"),
      situation: EducationalSituation.CONCLUIDO
    });

    let experiences: Experience[] = [];

    experiences.push({
      institution: "Auxiliar de almoxarifado",
      address: "Goias - Brasil",
      office: `Construção Cívil`,
      startDate: new Date("01/01/2019"),
      endDate: new Date("02/05/2021"),
      description: `Administração de inventário, carga e descarga de materiais, recebimento
      e fiscalização de entregas.`
    });

    experiences.push({
      institution: "Assistente Comercial",
      address: "Brasilia - Brasil",
      office: `Dubai Imobiliária`,
      startDate: new Date("01/01/2017"),
      endDate: new Date("01/07/2018"),
      description: `Panfletagem; Abordagem pública e capitação de clientes.`
    });

    experiences.push({
      institution: "Pesquisador em Botânica - Estágio",
      address: "Brasilia - Brasil",
      office: `Departamento de Botânica, IB / UnB`,
      startDate: new Date("01/01/2016"),
      endDate: new Date("01/07/2016"),
      description: `Pesquisa sobre Sorghum bicolor. Análise de dados com foco em
      caracteres fisiológicos de resistência hídrica, patológica e valores nutricionais.`
    });

    experiences.push({
      institution: "Operador de Caixa (Bilheteria)",
      address: "Brasilia - Brasil",
      office: `Parque de Diversões São Francisco`,
      startDate: new Date("01/01/2013"),
      endDate: new Date("01/07/2015"),
      description: `Atendimento ao público; Abrir e fechar caixa.`
    });

    experiences.push({
      institution: "Auxiliar Administrativo",
      address: "Brasilia - Brasil",
      office: `SESC, Serviço Social do Comércio`,
      startDate: new Date("01/01/2011"),
      endDate: new Date("01/01/2012"),
      description: `Experiência em ambiente escolar: Secretaria, Coordenação e Biblioteca.
      Principais atividades: Gestão de arquivos, revisão de banco de dados e atendimento
      ao público.`
    });

    let certificates: Certificate[] = [];
    certificates.push({
      name: "Operador de Micro",
      address: "Águas Lindas/GO - Brasil",
      startDate: new Date("01/01/2009"),
      endDate: new Date("12/12/2009"),
      description: `Globo Informática`
    });

    certificates.push({
      name: "Design Gráfico ",
      address: "Brasilia/DF - Brasil",
      startDate: new Date("01/01/2014"),
      endDate: new Date("06/12/2014"),
      description: `Redzero`
    });


    curriculum.certificates = certificates;
    curriculum.experiences = experiences;
    curriculum.educations = educations;

    curriculum.personal.skills = skills;
    curriculum.personal.knowledges = knowledges;
    curriculum.personal.languages = languages;
    curriculum.personal.contacts = contacts;
    curriculum.configurations = Constants.configuration;

    return curriculum;
  }

}
