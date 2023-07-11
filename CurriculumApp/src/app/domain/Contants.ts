import { LanguageEnum } from "./Enums";
import { Color, Font, Language } from "./Interfaces";
import { Configuration, Curriculum } from "./Models";

export class Constants {

  static labels: any = {
    pt: {
      conhecimentos: "conhecimentos",
      experiencias: "experiências",
      contatos: "contatos",
      habilidades: "habilidades",
      linguagens: "linguagens",
      certificados: "certificados",
      educacao: "educacao",
      perfil: "perfil",
    },
    en: {
      conhecimentos: "knowledge",
      experiencias: "experiences",
      contatos: "contacts",
      habilidades: "skills",
      linguagens: "languages",
      certificados: "accomplishments",
      educacao: "education",
      perfil: "professional summary",
    },
    es: {
      conhecimentos: "conocimiento",
      experiencias: "experiencias",
      contatos: "contactos",
      habilidades: "habilidades",
      linguagens: "idiomas",
      certificados: "certificados",
      educacao: "educación",
      perfil: "perfil",
    }
  };

  static colors: Color[] = [
    { name: "Azul", code: "#003d69" },
    { name: "Vermelho", code: "#ff0000" },
    { name: "Verde", code: "#008000" },
    { name: "Roxo", code: "#800080" },
    { name: "Preto", code: "#000000" },
    { name: "Cinza", code: "#808080" },
    { name: "Marrom Avermelhado", code: "#800000" },
  ];

  static languages: Language[] = [
    { name: "Portugues", code: LanguageEnum.PORTUGUES },
    { name: "Espanhol", code: LanguageEnum.ESPANHOL },
    { name: "Ingles", code: LanguageEnum.INGLES },
  ];

  static fonts: Font[] = [
    { name: "Times New Roman", sub: "Times", font: "serif" },
    { name: "Arial", sub: "Helvetica", font: "sans-serif" },
    { name: "Lucida Console", sub: "Courier New", font: "monospace" },
  ];

  static configuration: Configuration = new Configuration(Constants.colors[0], Constants.fonts[0], Constants.languages[0]);

  static curriculum(curr = null): Curriculum {
    if (curr == null) {
      curr = new Curriculum();
    }

    curr.configurations = Constants.configuration;

    return curr;
  };

  static getFontString(font: Font): string {
    return `${font.name}, ${font.sub}, ${font.font}`;
  }

  static getLabels(language: LanguageEnum): any {
    return Constants.labels[language];
  }

}
