import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test-modal',
  templateUrl: 'test-modal.html',
})
export class TestModalPage {

  constructor(public navCtrl: NavController,
  public viewCtrl:ViewController,
  public modalCtrl: ModalController,
   public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  selectCancel(){
    this.viewCtrl.dismiss('');
  }

}
