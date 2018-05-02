import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllMatchesPage } from '../all-matches/all-matches';
import { TomorrowPage } from '../tomorrow/tomorrow';
import { TodayPage } from '../today/today';

@IonicPage()
@Component({
  selector: 'page-yesterday',
  templateUrl: 'yesterday.html',
})
export class YesterdayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showAllMatches() {
    this.navCtrl.push(AllMatchesPage);
  }
  showTomorrowPage() {
    this.navCtrl.push(TomorrowPage);
  }
  showTodayPage() {
    this.navCtrl.push(TodayPage);
  }
}
