import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viewtopic',
  templateUrl: 'viewtopic.html',
})
export class ViewtopicPage {

  topicInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.topicInfo = navParams.data;
  }

  goBack() {
    this.navCtrl.pop();
  }

}
