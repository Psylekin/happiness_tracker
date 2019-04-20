import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

  isHappiDone: boolean = false;
  happiChange: Subject <boolean> = new Subject <boolean>();

  constructor() {
    this.happiChange.subscribe((value) => this.isHappiDone = value)
  }

  get_doneHappiness(){
    return this.isHappiDone;
  }

  get_HappiChange(){
    return this.happiChange
  }

  verify_doneHappiness(){
    this.happiChange.next(true);
  }
  
}
