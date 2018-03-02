import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-md2',
  templateUrl: 'md2.html',
})
export class Md2Page {
  selectedItem2: any;
  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem2 = this.navParams.get('selectedItem');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

  next() {
    this.navCtrl.push('Md3Page', {
      selectedItem2: this.selectedItem2,
    });
  }

}
