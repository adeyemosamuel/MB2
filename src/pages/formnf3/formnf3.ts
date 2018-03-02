import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-formnf3',
  templateUrl: 'formnf3.html',
})
export class Formnf3Page {

  sdate: any;
  shipment: any;
  pdate: any;
  discharge: any;
  proforma: any;
  description: any;
  quantity: any;
  weight: any;
  currency: any;
  fob: any;
  cf: any;
  hs: any;
  gross: any;
  goods: any;
  freight: any;
  shipmentData: any = [];
  dischargeData: any = [];
  currencyData: any = [];


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
   this.shipment=this.appdata.getShipment();
   this.dischargeData=this.appdata.getDischarge();
   this.currencyData=this.appdata.getCurrency();
  }

  save(){ 
    if (!this.verify.verifyFormNXP3(this.sdate,this.shipment,this.pdate,this.discharge,this.proforma,
      this.description,this.quantity,this.weight,this.currency,this.fob,this.cf,
      this.hs,this.gross,this.goods,this.freight)) {
      alert(this.verify.errorMessage);
      this.alertCtrl.create({
        subTitle: 'Message',
        message: this.verify.errorMessage
      }).present();
      return false;
    }
    
  }

  submit(){ 
    if (!this.verify.verifyFormNXP3(this.sdate,this.shipment,this.pdate,this.discharge,this.proforma,
      this.description,this.quantity,this.weight,this.currency,this.fob,this.cf,
      this.hs,this.gross,this.goods,this.freight)) {
      alert(this.verify.errorMessage);
      this.alertCtrl.create({
        subTitle: 'Message',
        message: this.verify.errorMessage
      }).present();
      return false;
    }
    
  }

}
