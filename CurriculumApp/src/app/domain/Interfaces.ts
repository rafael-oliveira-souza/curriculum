import { LanguageEnum } from "./Enums";

export interface Color {
  name: string,
  code: string
}

export interface Language {
  name: string,
  code: LanguageEnum
}

export interface Font {
  name: string,
  sub: string,
  font: string
}
