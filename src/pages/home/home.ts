import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ViewnewsPage } from '../viewnews/viewnews';
import { ViewmatchPage } from '../viewmatch/viewmatch';

// News interface
interface Newsinf {
  title: string;
  img: string;
  slideImg: string;
  keywords: string;
  desc: string;
  newsAuthor: string;
  newsDate: string;
  text: string;
  isShown: boolean;
  isSlide: boolean;
  newsViews: number;
  newsLikes: number;
  id?: any;
}
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  @ViewChild(Slides) slides: Slides;

  newsCol: AngularFirestoreCollection<Newsinf>;
  items: Observable<Newsinf[]>;
  title: string;
  img: string;
  slideImg: string;
  keywords: string;
  desc: string;
  newsAuthor: string;
  newsDate: string;
  text: string;
  isShown: boolean;
  isSlide: boolean;
  newsViews: number;
  newsLikes: number;

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

  showNewsInfo(item) {
    this.navCtrl.push(ViewnewsPage, item);
  }
  showMatchInfo(matchitem) {
    this.navCtrl.push(ViewmatchPage, matchitem);
  }

  ngOnInit() {
    this.newsCol = this.afs.collection('news', ref => {
      return ref.orderBy('newsDate', 'desc')
    });
    this.items = this.newsCol.valueChanges();

    this.matchesCol = this.afs.collection('matches', ref => {
      return ref.orderBy('day', 'desc')
    });
    this.matchitems = this.matchesCol.valueChanges();
  }

}


