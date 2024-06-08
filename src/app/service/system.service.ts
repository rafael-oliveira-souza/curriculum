import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguageEnum } from '../domain/Enums';
import { Curriculum } from '../domain/Models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'


@Injectable()
export class SystemService {
  private readonly urlTranslator: string = `https://translation.googleapis.com/language/translate/v2?key=${environment.key}`;
  public static readonly LANGUAGE_CURRICULUM = "LANGUAGE_CURRICULUM";

  constructor(private http: HttpClient) { }

  private _curriculum = new Subject<Curriculum>();

  public addCurriculum(curriculum: Curriculum): void {
    curriculum.lastChange = new Date().getTime();
    this._curriculum.next(curriculum);
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
    localStorage.setItem(SystemService.LANGUAGE_CURRICULUM, curriculum.configurations.language.code);
    
  }

  public getCurriculum() {
    return this._curriculum;
  }

  public getActualCurriculum(): Curriculum {
    return JSON.parse(localStorage.getItem("curriculum"));
  }

  public translateList(text: string[], language: LanguageEnum) {
    let obj: GoogleTranslatorRequest = {
      q: text,
      target: language
    }

    return this.http.post(this.urlTranslator, obj)
      .pipe(
        map((resp: GoogleTranslatorResponse) => {
          return resp.data.translations
            .map(translate => translate.translatedText);
        }));
  }


  public translate(text: string, language: LanguageEnum) {
    let obj: GoogleTranslatorRequest = {
      q: [text],
      target: language
    }

    return this.http.post(this.urlTranslator, obj)
      .pipe(
        map((resp: GoogleTranslatorResponse) => {
          var translations: string = "";
          resp.data.translations
            .forEach(translate => {
              translations = translations.concat(translate.translatedText);
            });

          return translations;
        }));
  }
}

export interface GoogleTranslatorRequest {
  q: string[];
  target: LanguageEnum;
}

export interface GoogleTranslatorResponse {
  data: { translations: { translatedText: string, detectedSourceLanguage: string }[] }
}
