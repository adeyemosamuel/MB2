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

}
