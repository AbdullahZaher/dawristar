import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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

@IonicPage()

@Component({
  selector: 'page-all-matches',
  templateUrl: 'all-matches.html',
})

export class AllMatchesPage {
  matchesCol: AngularFirestoreCollection<Matinf>;
  matchitems: Observable<Matinf[]>;
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

  constructor(public navCtrl: NavController,
  public navParams: NavParams, public afs: AngularFirestore) {}

  showMatchInfo(matchitem) {
    this.navCtrl.push(ViewmatchPage, matchitem);
  }

  ngOnInit() {

    this.matchesCol = this.afs.collection('matches', ref => {
      return ref.orderBy('day', 'desc')
    });
    this.matchitems = this.matchesCol.valueChanges();
  }

}
