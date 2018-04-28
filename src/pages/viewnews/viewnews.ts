import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viewnews',
  templateUrl: 'viewnews.html',
})
export class ViewnewsPage {

  newsInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newsInfo = navParams.data;
  }

  goBack() {
    this.navCtrl.pop();
  }

}
