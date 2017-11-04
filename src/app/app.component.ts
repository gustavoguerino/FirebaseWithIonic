import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../services/user/user.service';
import { Platform, NavController, ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  @ViewChild('content') navCtrl: NavController
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private userService: UserService, afauth: AngularFireAuth, public toastCtrl: ToastController) {

    const authObservable = afauth.authState.subscribe(user =>{
        if(user){
          this.rootPage = 'HomePage'
        }
        else{
          this.rootPage = 'LoginPage'
        }
        authObservable.unsubscribe();
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  async signOut(){
    try {
      await this.userService.logout();
      this.navCtrl.setRoot('LoginPage');
    }
    catch(error){
      this.toastCtrl.create({duration: 3000, position: 'bottom'}).setMessage("Erro ao sair: " + error).present();
    }
  }
}
