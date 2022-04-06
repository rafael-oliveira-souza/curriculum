import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Curriculum } from '../domain/Models';

@Injectable()
export class SystemService {

    constructor() { }

    public _curriculum$ = new Subject<Curriculum>();

    public addCurriculum(curriculum: Curriculum): void {
        this._curriculum$.next(curriculum);
    }

    public getCurriculum(){
       return this._curriculum$.asObservable();
    }
}
