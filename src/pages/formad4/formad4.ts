import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-formad4',
  templateUrl: 'formad4.html',
})
export class Formad4Page {

  selectedItem4: any;
  selectedItem3: any;
  id: number; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem4= this.navParams.get('selectedItem3');
    console.log(this.navParams.get('selectedItem3'));
  }

}
