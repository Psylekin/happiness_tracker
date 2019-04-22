import { Component, OnInit } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  isHappiDone : boolean
  isActDone : boolean

  constructor(private uiState : UiStateService, private notificationService : NotificationService){
  }

  ngOnInit(){
    this.uiState.happiChange.subscribe(
      value => {this.isHappiDone = value;});
    this.uiState.ActSatChange.subscribe(
      value => {this.isActDone = value;})
    }

  push_notifications(){
    this.notificationService.create_notification();
  }


}
