import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  private actionsatisfaction : FormGroup;
  public now : Date = new Date();
  public date : string;

  constructor( private formBuilder: FormBuilder ) {
    this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');

    this.actionsatisfaction = this.formBuilder.group({
      activity : ['', Validators.required],
      actionsatisfactionValue: ['', Validators.required],
      date: [this.date]
    });
  }
  logForm(){
    console.log(this.actionsatisfaction.value)
  }
  
}

