import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllMatchesPage } from '../all-matches/all-matches';
import { YesterdayPage } from '../yesterday/yesterday';
import { TomorrowPage } from '../tomorrow/tomorrow';

@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  showAllMatches() {
    this.navCtrl.push(AllMatchesPage);
  }
  showYesterdayMatches() {
    this.navCtrl.push(YesterdayPage);
  }
  showTomorrowMatches() {
    this.navCtrl.push(TomorrowPage);
  }

}
