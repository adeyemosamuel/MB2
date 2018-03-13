import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    userName: string = '';
    passWord: string = '';
    // disableButton: boolean = true; 



    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private store: Storage,
        private server: ServerServiceProvider) {


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    // validateInput(val){
    //   if (this.userName.trim != null && this.passWord != ''){
    //     this.disableButton = false;
    //   }else{
    //     this.disableButton = true;
    //   }
    // }

    async Login() {
        // let loader = this.loadingCtrl.create({ spinner: "circles", content: 'Please wait....', duration: 100 });
        // loader.present();

        let body = {
            userName: 'Chrissy:C000854',
            passWord: 'password123'  
        };

        try {
            let response = await this.server.processData(body, '/user/Signin');
            console.log(response);
            if (response.status === '00') {
                this.store.set('token', response.data.token);
                this.navCtrl.push('TabsPage');
            } else {
                alert(response.message);
            }
        } catch (err) {
            console.log(err);
        }

        // loader.dismiss(); 
    }

    forgot(){
        this.navCtrl.push('ForgotPage');
    }

}
