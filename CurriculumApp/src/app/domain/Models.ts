import { EducationalSituation, LanguageLevel } from "./Enums"
import { Color } from "./Interfaces";

export class KeyValue<T, R> {
    key: T | undefined;
    value: R | undefined;

    constructor(key: T, value: R){
        this.key = key;
        this.value = value;
    }
}

export class Personal {
    name: string = '';
    office: string = '';
    profile: string = '';
    birthday: Date | undefined;
    contacts: KeyValue<string, string>[] = [];
    knowledges: KeyValue<string, string[]>[] = [];
    languages: KeyValue<string, LanguageLevel>[] = [];

    constructor(){}
}

export class Education {
    institution: string = '';
    address: string = '';
    situation: EducationalSituation | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(){}
}


export class Experience {
    institution: string = '';
    address: string = '';
    description: string = '';
    office: string = '';
    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(){}
}


export class Certificate {
    name: string = '';
    address: string = '';
    description: string = '';
    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(){}
}


export class Configuration {
    color: Color | undefined;

    constructor(color: Color ){
        this.color = color;
    }
}

export class Curriculum {
    personal: Personal | undefined;
    certificates: Certificate[] = [];
    experiences: Experience[] = [];
    educations: Education[] = [];
    configurations: Configuration | undefined;

    constructor(){}
}