import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-md',
  templateUrl: 'md.html',
})
export class MdPage {
  selectedItem: any;
  m:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('m');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

  next() {
    this.navCtrl.push('Md2Page', {
      selectedItem: this.selectedItem,
    });
  }
}
