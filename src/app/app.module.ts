import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SalesListService } from './../services/sales-list/sales-list.service';
import { UserService } from './../services/user/user.service';
import { MyApp } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC1qI8F_eOt24ma0STtR_64OcAtkezrds8",
  authDomain: "candyshop-9672c.firebaseapp.com",
  databaseURL: "https://candyshop-9672c.firebaseio.com",
  projectId: "candyshop-9672c",
  storageBucket: "",
  messagingSenderId: "350325943659"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SalesListService,
    UserService
  ]
})
export class AppModule {}
