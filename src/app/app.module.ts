import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddContactPage } from '../pages/add-contact/add-contact';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyCrZpORU_czh2oUrAkRrN7TyuZChUNx0B4",
      authDomain: "myionic2firebase.firebaseapp.com",
      databaseURL: "https://myionic2firebase.firebaseio.com",
      storageBucket: "myionic2firebase.appspot.com",
    })
  ]
})
export class AppModule {}
