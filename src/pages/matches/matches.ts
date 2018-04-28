import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html'
})
export class MatchesPage {

  todayRoot = 'TodayPage'
  yesterdayRoot = 'YesterdayPage'
  tomorrowRoot = 'TomorrowPage'
  allMatchesRoot = 'AllMatchesPage'


  constructor(public navCtrl: NavController) {}

}
