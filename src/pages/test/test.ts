import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
   searchTerm: any;
   bdata: Array<any> = [];
   searchNameData:string = '';
  hideButton:boolean=false;
  hideButton2:boolean=false;
  hideButton3:boolean=false;
  hideButton4:boolean=false;
  hideButton5:boolean=false;


  constructor(public navCtrl: NavController,
  private appdata: AppdataProvider,
  public modalCtrl: ModalController, 
   public navParams: NavParams) {
  }

  ionViewDidLoad() {
 this.bdata=this.appdata.getInfo();
  }

mikilo(){
    this.hideButton = !this.hideButton;
  }

  mikilo2(){
    this.hideButton2 = !this.hideButton2;
  }

  mikilo3(){
    this.hideButton3 = !this.hideButton3;
  }
 
  mikilo4(){
    this.hideButton4 = !this.hideButton4;
  }

  mikilo5(){
    this.hideButton5 = !this.hideButton5;
  }

  searchModal(){
    let modal = this.modalCtrl.create('TestModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data); 
      this.searchNameData = data;
    });
   }
}
