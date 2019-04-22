import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private localNotifications: LocalNotifications) { }

  create_notification(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Text',
      trigger: {at: new Date(new Date().getTime() + 10)},
      led: 'FF0000',
      sound: null
    });
  }

}




