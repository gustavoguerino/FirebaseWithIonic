import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSalePage } from './edit-sale';

@NgModule({
  declarations: [
    EditSalePage,
  ],
  imports: [
    IonicPageModule.forChild(EditSalePage),
  ],
})
export class EditSalePageModule {}
