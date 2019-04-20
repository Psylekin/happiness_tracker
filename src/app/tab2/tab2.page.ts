import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';
import { UiStateService } from '../services/ui-state.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  private actionsatisfaction : FormGroup;
  public now : Date = new Date();
  public date : string;
  private isActDone : boolean;

  constructor(
    private formBuilder: FormBuilder, private httpService : HttpService, private toastService : ToastService,
    private uiState : UiStateService) {

    this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');
    this.actionsatisfaction = this.formBuilder.group({
      activity : ['', Validators.required],
      actionsatisfactionValue: ['', Validators.required],
      date: [this.date]
    });
  }

  ngOnInit(){
    this.uiState.ActSatChange.subscribe(
      value => {this.isActDone = value}
    )
  }



  sendForm(){
    this.httpService.save_measurement(this.actionsatisfaction.value)
    this.toastService.presentToast('Erfolg','Vielen Dank!')
    this.uiState.verify_doneAct()
    this.actionsatisfaction.reset()
  }
  
}

