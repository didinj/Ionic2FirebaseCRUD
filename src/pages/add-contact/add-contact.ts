import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the AddContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {
  contactList: FirebaseListObservable<any>;
  contact = {
    id: '',
    name: '',
    address: '',
    phone: '',
    city: ''
  };
  constructor(public navCtrl: NavController, public af: AngularFire, public params: NavParams) {
    this.contactList = af.database.list('/contacts');
    this.contact.id = this.params.get('key');
    this.contact.name = this.params.get('name');
    this.contact.address = this.params.get('address');
    this.contact.phone = this.params.get('phone');
    this.contact.city = this.params.get('city');
  }

  addContact(id, name, address, phone, city) {
    if(id) {
      this.contactList.update(id, {
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.contactList.push({
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }

}
