import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';

@IonicPage()
@Component({
  selector: 'page-remf2',
  templateUrl: 'remf2.html',
})
export class Remf2Page {
  bname: any;
  baddress: any;
  bphone: any;
  baccount: any;
  bcountries: any;
  bpostcode: any;
  countryData: any = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
    private verify: VerifyServiceProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.countryData = this.appdata.getCountry();
  }


  next(){

    // if (!this.verify.verifyNext2(this.bname, this.baddress, this.bphone, this.baccount, this.bcountries, this.bpostcode)) {
    //   alert(this.verify.errorMessage);
    //   this.alertCtrl.create({
    //     subTitle: 'Message',
    //     message: this.verify.errorMessage
    //   }).present();
    //   return false;
    // }
    this.navCtrl.push('Remf3Page');
  }

}
