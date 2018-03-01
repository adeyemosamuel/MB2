import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formnxp',
  templateUrl: 'formnxp.html',
})
export class FormnxpPage {

  name:any;
  formnumber:any;
  status:any;
  date:any;
  n:any;
  searchTerm: any;
  FormNXP: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormNXP= this.appdata.getInfo();
  }

}
