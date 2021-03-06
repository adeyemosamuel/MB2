import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {
  name:any;
  formnumber:any;
  status:any;
  date:any;
  a:any;
  searchTerm: any;
  FormArray: Array<any> = [];

  constructor(public navCtrl: NavController, 
    private appdata: AppdataProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    this.FormArray= this.appdata.getInfo();
  }

  initializeItems(){
    this.FormArray= this.appdata.getInfo();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value; 

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormArray = this.FormArray.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemTapped(a){
    this.navCtrl.push('FormadPage', {
      a:a
    }); 
  }

  fab(){
    this.navCtrl.push('FormafPage');
  }

}
