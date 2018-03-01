import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formad',
  templateUrl: 'formad.html',
})
export class FormadPage {
  
  selectedItem: any;
  id: number;
  a: any;
  iData: any = [];
  stateData: any = [];
  countryData: any = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.iData= this.appdata.getID();
    this.selectedItem= this.navParams.get('a');
    console.log(this.navParams.get('a'));
  }

  next(){
    this.navCtrl.push('Formad2Page', {
      selectedItem:this.selectedItem,
      
    });
  }

}
