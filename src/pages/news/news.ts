import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public afs: AngularFirestore) {}

  ngOnInit() {
    this.newsCol = this.afs.collection('news', ref => {
      return ref.orderBy('newsDate', 'desc')
    });
    this.items = this.newsCol.valueChanges();
  }

}
