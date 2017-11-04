import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Sale } from './../../models/sale/sale.model';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

import { UserService } from './../../services/user/user.service';
import { SalesListService } from './../../services/sales-list/sales-list.service';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AngularFireDatabase
  ]
})
export class HomePage {
  salesList$: Observable<Sale[]>
  constructor(public navCtrl: NavController, private sales: SalesListService,
  public toastCtrl: ToastController, private userService: UserService)
  {
    this.salesList$ = this.sales
    .getSalesList()
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }
  async signOut(){
    try {
      const result = await this.userService.logout();
      this.navCtrl.setRoot('LoginPage');
    }
    catch(error){
      this.toastCtrl.create({duration: 3000, position: 'bottom'}).setMessage("Erro ao sair: " + error).present();
    }
  }
}
