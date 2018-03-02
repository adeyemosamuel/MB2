import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
// import { DatePicker } from '@ionic-native/date-picker';


@IonicPage()
@Component({
  selector: 'page-formnd3',
  templateUrl: 'formnd3.html',
})
export class Formnd3Page {
  selectedItem3: any;
  selectedItem2:any;
  shipmentData: any = [];
  dischargeData: any = [];
  currencyData: any = [];

  constructor(public navCtrl: NavController, 
    // private datePicker: DatePicker,
    private appdata: AppdataProvider,
    public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
    this.selectedItem3 = this.navParams.get('selectedItem2');
    this.shipmentData=this.appdata.getShipment();
    this.dischargeData=this.appdata.getDischarge();
    this.currencyData=this.appdata.getCurrency();
  }

  save(){

  }

  submit(){
    
  }

}
