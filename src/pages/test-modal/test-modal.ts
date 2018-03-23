import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-test-modal',
  templateUrl: 'test-modal.html',
})
export class TestModalPage {

  searchTerm: string='';
 
  bdata:Array<any>=[];

  constructor(public navCtrl: NavController,
  public viewCtrl:ViewController,
  private appdata: AppdataProvider,
   public navParams: NavParams) {
  }

  ionViewDidLoad() { 
   this.getbNameLists();
  }

  getbNameLists(){
    this.bdata=this.appdata.getInfo();
  }


  selectCancel(){
    this.viewCtrl.dismiss('');
  }

  itemTapped(b){
    this.navCtrl.push('TestPage', {
      b:b
    });
  }

}
