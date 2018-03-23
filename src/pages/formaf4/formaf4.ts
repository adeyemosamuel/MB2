import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formaf4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formaf4',
  templateUrl: 'formaf4.html',
})
export class Formaf4Page {
  hideButton:boolean=false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formaf4Page');
  }

  mikilo(){
    this.hideButton = !this.hideButton;
  }

}
