import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user/user.model";
import { UserService } from "../../services/user/user.service";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(public navCtrl: NavController, private userService: UserService,
    public toastCtrl: ToastController, public navParams: NavParams) {
  }
  async register(user: User){
    try {
      const result = await this.userService.signUp(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('HomePage');
      }
    }
    catch(error) {
      let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
      if (error.code == 'auth/email-already-in-use') {
        toast.setMessage('Este email já consta em nosso sistema');
      }
      else if (error.code == 'auth/invalid-email') {
        toast.setMessage('Email invalido');
      }
      else if (error.code == 'auth/operation-not-allowed') {
        toast.setMessage('Operação não permitida');
      }
      else if (error.code == 'auth/weak-password') {
        toast.setMessage('Senha fraca, tente novamente');
      }
      else{
        toast.setMessage('Erro: '+ error);
      }
      toast.present();
    }
  }
}
