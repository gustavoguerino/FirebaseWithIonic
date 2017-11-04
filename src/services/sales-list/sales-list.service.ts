import { Sale } from './../../models/sale/sale.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SalesListService {
    private salesListRef = this.salesListRef = this.db.list<Sale>("Visitante");

    constructor(private db: AngularFireDatabase, private afauth: AngularFireAuth){
      // Write and read permissions to list is set only to user with uid(user) = uid(list)
      this.afauth.authState.subscribe(user =>{
          if(user){
            this.salesListRef = this.db.list<Sale>(user.uid);
          }
      });
    }

    getSalesList(){
        return this.salesListRef;
    }

    addSale(sale: Sale){
        return this.salesListRef.push(sale);
    }

    editSale(sale: Sale){
        return this.salesListRef.update(sale.key, sale);
    }
}
