import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formm',
  templateUrl: 'formm.html',
})
export class FormmPage {

  name:any;
  formnumber:any;
  status:any;
  date:any;
  m:any;
  searchTerm: any;
  FormM: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormM= this.appdata.getMoney();
   
  }

}
