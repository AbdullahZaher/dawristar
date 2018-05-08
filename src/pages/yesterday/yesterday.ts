import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

import { AllMatchesPage } from '../all-matches/all-matches';
import { TomorrowPage } from '../tomorrow/tomorrow';
import { TodayPage } from '../today/today';
import { ViewmatchPage } from '../viewmatch/viewmatch';


// Matches interface
interface Matinf {
  league: string;
  home: string;
  home_bdg: string;
  away: string;
  away_bdg: string;
  day: string;
  time: string;
  field: string;
  ref: string;
  tv: string;
  comm: string;
  tag: string;
}

let yester = moment().subtract(1, 'day').format('YYYY-MM-DD').toString();

@IonicPage()
@Component({
  selector: 'page-yesterday',
  templateUrl: 'yesterday.html',
})
export class YesterdayPage {
  matchesCol: AngularFirestoreCollection<Matinf>;
  matchitems: Observable<Matinf[]>;
  league: string;
  home: string;
  home_bdg: string;
  da = yester;
  away: string;
  away_bdg: string;
  day: string;
  time: string;
  field: string;
  ref: string;
  tv: string;
  comm: string;
  tag: string;

  constructor(public navCtrl: NavController,
  public navParams: NavParams, public afs: AngularFirestore) { }

  showMatchInfo(matchitem) {
    this.navCtrl.push(ViewmatchPage, matchitem);
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

  ngOnInit() {
    this.matchesCol = this.afs.collection('matches', ref => {
      return ref.where('day', '==', yester)
    });
      this.matchitems = this.matchesCol.valueChanges();
  }

}
