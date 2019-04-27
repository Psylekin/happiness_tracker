import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';
import { UiStateService } from '../services/ui-state.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{  
  public lifesatisfaction : FormGroup;
  public now : Date = new Date();
  public date : string;
  public isHappiDone : boolean;

  constructor( 
    private formBuilder: FormBuilder, private httpService : HttpService, private toastService : ToastService,
    private uiState: UiStateService ) {
    
    this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');
    this.lifesatisfaction = this.formBuilder.group({
      lifesatisfationValue: ['', Validators.required],
      date: [this.date]
    });
  }

  ngOnInit(){
    this.uiState.happiChange.subscribe(
      value => {this.isHappiDone = value}
    )
  }

  sendForm(){
    this.httpService.save_measurement(this.lifesatisfaction.value)
    this.toastService.presentToast('Erfolg','Vielen Dank!')
    this.uiState.verify_doneHappiness()
    this.lifesatisfaction.reset()
  }
}

