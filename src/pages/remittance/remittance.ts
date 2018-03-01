import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-remittance',
  templateUrl: 'remittance.html',
})
export class RemittancePage {

  name:any;
  formnumber:any;
  status:any;
  date:any;
  a:any;
  searchTerm: any;
  FormRemittance: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormRemittance= this.appdata.getMoney();
  }

}
