import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllMatchesPage } from '../all-matches/all-matches';
import { YesterdayPage } from '../yesterday/yesterday';
import { TodayPage } from '../today/today';


@IonicPage()
@Component({
  selector: 'page-tomorrow',
  templateUrl: 'tomorrow.html',
})
export class TomorrowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showAllMatches() {
    this.navCtrl.push(AllMatchesPage);
  }
  showYesterdayMatches() {
    this.navCtrl.push(YesterdayPage);
  }
  showTodayPage() {
    this.navCtrl.push(TodayPage);
  }


}
