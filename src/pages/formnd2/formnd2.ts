import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
// import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-formnd2',
  templateUrl: 'formnd2.html',
})
export class Formnd2Page {
  selectedItem2: any;
  selectedItem: any;
  cityData: any = [];
  stateData: any = [];
  countryData: any = [];
  accountData: any = [];
  domiciliaryData: any = [];
  formpurposeData: any = [];
  chargeData: any = [];
  prefixData: any = [];

  constructor(public navCtrl: NavController,
    // private datePicker: DatePicker,
    private appdata: AppdataProvider,
    public navParams: NavParams) {

  }

  
 
  ionViewDidLoad() {
    this.selectedItem2 = this.navParams.get('selectedItem');
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.cityData= this.appdata.getCity();
    this.accountData= this.appdata.getAccount();
    this.domiciliaryData= this.appdata.getDomiciliary();
    this.formpurposeData=this.appdata.getFormP();
    this.chargeData=this.appdata.getCharge();
    this.prefixData=this.appdata.getPrefix();
  }

  next() {
    this.navCtrl.push('Formnd3Page', {
      selectedItem2: this.selectedItem2,
    });
  }

}
