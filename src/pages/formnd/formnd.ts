import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formnd',
  templateUrl: 'formnd.html',
})
export class FormndPage {
  selectedItem: any;
  stateData: any = [];
  countryData: any = [];
  cityData: any = [];
  methodData: any = [];
  a: any;

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('a');
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.cityData = this.appdata.getCity();
    this.methodData = this.appdata.getMethod();
  }

  next() {
    this.navCtrl.push('Formnd2Page', {
      selectedItem: this.selectedItem,
    });
  }

}
