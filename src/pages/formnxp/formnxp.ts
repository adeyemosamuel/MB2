import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formnxp',
  templateUrl: 'formnxp.html',
})
export class FormnxpPage {

  name:any;
  formnumber:any;
  status:any;
  date:any;
  n:any;
  searchTerm: any;
  FormNXP: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormNXP= this.appdata.getInfo();
  }

  initializeItems(){
    this.FormNXP= this.appdata.getInfo();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormNXP = this.FormNXP.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  fab(){
    
  }


}
