import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire, public loadingCtrl: LoadingController, public params: NavParams) {
    let loading = this.loadingCtrl.create({
      content: "Load Data...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
    this.contactList = af.database.list('/contacts');
  }

  addContact(){
    this.navCtrl.push(AddContactPage);
  }

  editContact(contact){
    this.navCtrl.push(AddContactPage, {
      key: contact.$key,
      name: contact.name,
      address: contact.address,
      phone: contact.phone,
      city: contact.city
    });
  }

  deleteContact(contact) {
    this.contactList.remove(contact);
  }

}
