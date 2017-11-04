import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user/user.model';
import { UserService } from './../../services/user/user.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, private userService: UserService,
    public toastCtrl: ToastController, public navParams: NavParams) {
  }
  async login(user: User){
    try{
      const result = await this.userService.signIn(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('HomePage');
      }
    }
    catch(error) {
      let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
      if (error.code == 'auth/invalid-email') {
        toast.setMessage('Email invalido');
      }
      else if (error.code == 'auth/user-disabled') {
        toast.setMessage('Usuario desabilitado');
      }
      else if (error.code == 'auth/user-not-found') {
        toast.setMessage('Usuario não encontrado');
      }
      else if (error.code == 'auth/wrong-password') {
        toast.setMessage('Senha incorreta');
      }
      else{
        toast.setMessage('Erro: '+ error);
      }
      toast.present();
    }
  }
}
