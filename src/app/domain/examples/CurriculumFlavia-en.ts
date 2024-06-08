import { Constants } from "../Contants";
import { LanguageLevel, EducationalSituation } from "../Enums";
import { Curriculum, Personal, KeyValue, Education, Experience, Certificate } from "../Models";

export class CurriculumFlaviaEN {

  static get() {
    let curriculum = new Curriculum();
    let personal = new Personal();
    personal.birthday = new Date("1996-02-20");
    personal.name = "Flávia Dangelo Ferreira Muniz";
    // personal.office = "Analista de Projetos"
    personal.profile = `I am a historian with a Bachelor’s degree from the University of Brasilia (UnB). 
    I have recently decided to change my career path to Project Management. 
    I am specializing in Agile Methodology and pursuing a Postgraduate degree in Project Management. 
    I am well organized, proactive and interested in new challenges..
    `;

    curriculum.personal = personal;

    let skills: KeyValue<string, number>[] = [];
    let contacts: KeyValue<string, string>[] = [];
    let knowledges: KeyValue<string, string[]>[] = [];
    let languages: KeyValue<string, LanguageLevel>[] = [];


    contacts.push(new KeyValue("Address", "QNL 12, bloco B, apartamento 113. Taguatinga Norte, cep: 72156-212."));
    contacts.push(new KeyValue("Phone", "+55 6199682-5543"));
    contacts.push(new KeyValue("Mail", "flaviadfmuniz@hotmail.com"));
    contacts.push(new KeyValue("LinkedIn", "https://www.linkedin.com/in/fl%C3%A1via-dangelo-ferreira-muniz-b81339199/"));

    skills.push(new KeyValue("Teamwork", 5));
    skills.push(new KeyValue("Team Management", 4));
    skills.push(new KeyValue("Project Management", 4));
    skills.push(new KeyValue("Archive Organization", 5));
    skills.push(new KeyValue("Leadership", 4));
    skills.push(new KeyValue("Communication", 5));

    languages.push(new KeyValue("English", LanguageLevel.AVANCADO));
    languages.push(new KeyValue("French", LanguageLevel.INTERMEDIARIO));
    languages.push(new KeyValue("Spanish", LanguageLevel.INICIANTE));

    knowledges.push(new KeyValue("Agile Methodology", ["Scrum", "Kanban", "Lean", "SAF"]));
    knowledges.push(new KeyValue("Office Package", ["Word", "Excel", "PowerPoint"]));
    // knowledges.push(new KeyValue("PMBOK", ["Equipe", "Ciclo de vida", "Planejamento", "Incerteza e Ambiguidade"]));

    let educations: Education[] = [];
    educations.push({
      name: " Bachelor’s degree in History ",
      institution: "University of Brasilia",
      address: "Brasilia, Federal District",
      startDate: new Date("03/03/2016"),
      endDate: new Date("12/12/2020"),
      situation: EducationalSituation.CONCLUIDO
    });
    educations.push({
      name: "Postgraduate degree in Leadership and People Management: Training, developing, directing and managing a team",
      institution: "FAST MBA Lead",
      address: "Brasilia, Federal District",
      startDate: new Date("05/05/2021"),
      endDate: null,
      situation: EducationalSituation.ANDAMENTO
    });
    educations.push({
      name: "Postgraduate degree in Project Management",
      institution: "Serra Geral College",
      address: "Brasilia, Federal District",
      startDate: new Date("01/03/2023"),
      endDate: null,
      situation: EducationalSituation.ANDAMENTO

    });
    let experiences: Experience[] = [];
    experiences.push({
      institution: "COC Lago Norte School",
      address: "Brasilia, Federal District",
      office: `Bilingual Teacher`,
      startDate: new Date("01/01/2020"), 
      endDate: null,
      description: `
      Responsible for teaching and planning English grammar lessons and grammar classes for elementary school students. 
      I am also an English teacher for students in the first year of Elementary School..`
    });

    experiences.push({
      institution: "GALT Portal",
      office: "History tutor",
      address: "Brasilia, Federal District",
      startDate: new Date("06/06/2019"),
      endDate: new Date("02/02/2020"),
      description: `Answering homework questions with students, teaching strategies for taking college entrance exams and reviewing classroom content.`
    });
    experiences.push({
      institution: "Federal Council of Engineering and Agronomy – CONFEA ",
      address: "Brasilia, Federal District",
      office: `Archivist – Internship`,
      startDate: new Date("06/06/2018"),
      endDate: new Date("01/01/2020"),
      description: `
      Classification and storage of archive collections in accordance with the classification code and CONARQ's Temporality 
      Table for documents and activities of CONFEA; applying the Temporality Table to documents in the archive; 
      document updates and registration data in control spreadsheets and in the Electronic Information System.`
    });

    experiences.push({
      institution: "Central Archive of the University of Brasilia ",
      address: "Brasilia, Federal District",
      office: `Archivist – Internship`,
      startDate: new Date("04/04/2017"),
      endDate: new Date("03/03/2018"),
      description: `Archive maintenance and upkeep; Document description and analysis; Research and data collection; Document classification. `
    });


    let certificates: Certificate[] = [];
    certificates.push({
      name: "Agile Methodology and SCRUM",
      address: "Brasilia, Federal District",
      startDate: new Date("03/03/2022"),
      endDate: new Date("01/06/2023"),
      description: `Udemy Academy`
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
