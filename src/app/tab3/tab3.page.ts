import { Component, OnInit } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isHappiDone : boolean
  isActDone : boolean

  constructor(private uiState : UiStateService){
  }

  ngOnInit(){
    this.uiState.happiChange.subscribe(
      value => {this.isHappiDone = value;});
    this.uiState.ActSatChange.subscribe(
      value => {this.isActDone = value;})
    }
}
