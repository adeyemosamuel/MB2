import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-md3',
  templateUrl: 'md3.html',
})
export class Md3Page {
  selectedItem3: any;
  selectedItem2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem3 = this.navParams.get('selectedItem2');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
