import { SalesListService } from './../../services/sales-list/sales-list.service';
import { Sale } from './../../models/sale/sale.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditSalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-sale',
  templateUrl: 'edit-sale.html',
})
export class EditSalePage {
  sale: Sale = {
    buyer:  "",
    itemName: "",
    quantity: undefined
  }
  constructor(public navCtrl: NavController, private sales: SalesListService, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.sale = this.navParams.get('sale');
  }

  editSale(sale: Sale) {
    this.sales.editSale(sale).then(() =>{
      this.navCtrl.pop();
    });
  }
}
