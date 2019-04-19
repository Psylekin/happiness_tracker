import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {  private lifesatisfaction : FormGroup;
  public now : Date = new Date();
  public date : string; 
  public timeOfDay : string;

  constructor( private formBuilder: FormBuilder ) {
    this.date = formatDate(new Date(), 'dd.MM.yyyy', 'en');
    this.timeOfDay = formatDate(new Date(), 'HH:mm', 'en');
    
    this.lifesatisfaction = this.formBuilder.group({
      lifesatisfationValue: ['', Validators.required],
      date: [this.date],
      timeOfDay: [this.timeOfDay]
    });
  }
  logForm(){
    console.log(this.lifesatisfaction.value)
  }
}

//TODO: Integrate LogService, Develop to http service