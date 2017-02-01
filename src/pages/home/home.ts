import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AppVersion, Contacts, Camera, Geolocation, GoogleMap } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts
  PHOTOLIBRARY = 0
  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {
    platform.ready().then(() => {
      // console.log("Version ",AppVersion.getVersionNumber())
      // AppVersion.getVersionNumber()
      //   .then(v => {
      //     console.log("Version: ", v)
      //   })

      // get contact info
      // Contacts.find(['displayName']).then(contacts => {
      //   this.contacts = contacts
      //   console.log(JSON.stringify(contacts))
      // })

      // get picture
      // Camera.getPicture({
      //   sourceType: this.PHOTOLIBRARY
      // }).then(imageData => {
      //   console.log("IMAGE: ", imageData)
      // })

      // geolocation 
      // Geolocation.getCurrentPosition()
      //   .then(position => {
      //     console.log("Position ",position)
      //   })

      // maps
      // let map = new GoogleMap('map')
    })
  }

}
