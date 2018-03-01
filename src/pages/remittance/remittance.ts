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


  initializeItems(){
    this.FormRemittance= this.appdata.getMoney();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormRemittance = this.FormRemittance.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemTapped(r){
    this.navCtrl.push('RemdPage', {
      r:r
    });
  }

}
