import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Sale } from './../../models/sale/sale.model';
import { Observable } from 'rxjs/Observable';

import { UserService } from './../../services/user/user.service';
import { SalesListService } from './../../services/sales-list/sales-list.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
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
      await this.userService.logout();
      this.navCtrl.setRoot('LoginPage');
    }
    catch(error){
      this.toastCtrl.create({duration: 3000, position: 'bottom'}).setMessage("Erro ao sair: " + error).present();
    }
  }
}
