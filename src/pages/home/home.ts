import { Sale } from './../../models/sale/sale.model';
import { SalesListService } from './../../services/sales-list/sales-list.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AngularFireDatabase
  ]
})

export class HomePage {
  salesList$: Observable<Sale[]>
  
  constructor(public navCtrl: NavController, private sales: SalesListService, public afdb: AngularFireDatabase) 
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
  newSale(){
    
  }
  
  editSale(id){
    
  }
}
