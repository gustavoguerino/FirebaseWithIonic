import { SalesListService } from './../../services/sales-list/sales-list.service';
import { Sale } from './../../models/sale/sale.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddSalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-sale',
  templateUrl: 'add-sale.html',
})
export class AddSalePage {
  sale: Sale = {
    buyer:  "",
    itemName: "",
    quantity: undefined
  }

  constructor(public navCtrl: NavController, private sales: SalesListService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSalePage');
  }

  addSale(sale: Sale){
    this.sales.addSale(sale).then(ref => {
      this.navCtrl.pop();
    });
  }
}
