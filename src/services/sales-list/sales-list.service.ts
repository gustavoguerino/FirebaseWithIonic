import { Sale } from './../../models/sale/sale.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SalesListService {
    private salesListRef = this.db.list<Sale>('sales-list');

    constructor(private db: AngularFireDatabase){}

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