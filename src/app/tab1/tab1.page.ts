import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';
import { LogService } from '../services/log.service';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {  
  private lifesatisfaction : FormGroup;
  public now : Date = new Date();
  public date : string;

  constructor( 
    private formBuilder: FormBuilder, private logService : LogService, 
    private httpService : HttpService, private toastService : ToastService ) {
    
    this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');
    this.lifesatisfaction = this.formBuilder.group({
      lifesatisfationValue: ['', Validators.required],
      date: [this.date]
    });
  }

  sendForm(){
    this.httpService.save_measurement(this.lifesatisfaction.value)
    this.toastService.presentToast('Erfolg','Vielen Dank!')
  }
}

