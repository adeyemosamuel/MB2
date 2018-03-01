import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-formnf',
  templateUrl: 'formnf.html',
})
export class FormnfPage {
  name: any;
  address: any;
  city: any;
  states: any;
  phone: any;
  nepc:any;
  rcnumber: any;
  method: any;
  cfname: any;
  clname: any;
  caddress: any;
  countries: any;
  stateData: any = [];
  countryData: any = [];
  cityData: any = [];
  methodData: any = [];

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
    this.methodData= this.appdata.getMethod();
  }


  next(){
    // if (!this.verify.verifyFormNXP(this.name,this.address,this.city,this.states,this.phone,this.nepc,this.rcnumber,this.method,this.cfname, this.clname,this.caddress,this.countries)) {
    //   alert(this.verify.errorMessage);
    //   this.alertCtrl.create({
    //     subTitle: 'Message',
    //     message: this.verify.errorMessage
    //   }).present();
    //   return false;
    // }
    this.navCtrl.push('Formnf2Page');
  }

}
