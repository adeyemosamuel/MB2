import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public _app: App,public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    
  } 

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

  changeUsername(){
this.navCtrl.push('UsernamePage');
  }

  changePassword(){
    this.navCtrl.push('PasswordPage');
  }

  notifications(){
    this.navCtrl.push('NotificationsPage');
  }

  logout(){
    localStorage.removeItem("currentUser");
    this._app.getRootNav().setRoot('LoginPage');
  }

}
