import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-formnf2',
  templateUrl: 'formnf2.html',
})
export class Formnf2Page {

  fname:any;
lname:any;
address:any;
city:any;
states:any;
countries:any;
account:any;
domiciliary:any;
domammount:any;
formpurpose:any;
pincode:any;
charge:any;
prefix:any;
date:any;
cityData: any = [];
stateData: any = [];
countryData: any = [];
accountData: any = [];
domiciliaryData: any = [];
formpurposeData: any = [];
chargeData: any = [];
prefixData: any = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    private viewCtrl: ViewController,
    private verify: VerifyServiceProvider,
    public http: Http,
    // private store: Storage,
    private server: ServerServiceProvider,
    private alertCtrl: AlertController,
    // private loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.cityData= this.appdata.getCity();
    this.accountData= this.appdata.getAccount();
    this.domiciliaryData= this.appdata.getDomiciliary();
    this.formpurposeData=this.appdata.getFormP();
    this.chargeData=this.appdata.getCharge();
    this.prefixData=this.appdata.getPrefix();
  }

  next(){
    // if (!this.verify.verifyFormNXP2(this.fname,this.lname,this.address,this.city,this.states,this.countries,this.account,this.domiciliary,this.domammount,this.formpurpose,
    //   this.pincode,this.charge,this.prefix,this.date)) {
    //   alert(this.verify.errorMessage);
    //   this.alertCtrl.create({
    //     subTitle: 'Message',
    //     message: this.verify.errorMessage
    //   }).present();
    //   return false;
    // }
    this.navCtrl.push('Formnf3Page');
  }


}
