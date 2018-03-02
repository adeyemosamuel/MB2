import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-formm',
  templateUrl: 'formm.html',
})
export class FormmPage {

  name:any;
  formnumber:any; 
  status2:any;
  date:any;
  m:any;
  searchTerm: any;
  FormM: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormM= this.appdata.getMoney();
   
  }

  itemTapped(m){
    this.navCtrl.push('MdPage', {
      m:m,
    });
  }


  initializeItems(){
    this.FormM= this.appdata.getMoney();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormM = this.FormM.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
