import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

  isHappiDone: boolean = false;
  happiChange: Subject <boolean> = new Subject <boolean>();

  isActSatDone: boolean = false;
  ActSatChange: Subject <boolean> = new Subject <boolean>();

  constructor() {
    this.happiChange.subscribe((value) => this.isHappiDone = value)
    this.ActSatChange.subscribe((value) => this.isActSatDone = value)
  }

  verify_doneHappiness(){
    this.happiChange.next(true);
  }

  verify_doneAct(){
    this.ActSatChange.next(true);
  }
  
}
