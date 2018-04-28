import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ViewtopicPage } from '../viewtopic/viewtopic';


// Article interface
interface Artinf {
  title: string;
  img: string;
  author: string;
  keywords: string;
  essay: string;
  date: string;
  id?: any;
}

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  artCol: AngularFirestoreCollection<Artinf>;
  items: Observable<Artinf[]>;

  title: string;
  img: string;
  author: string;
  keywords: string;
  essay: string;
  date: string;
  id?: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore) { }

  showTopicInfo(item) {
    this.navCtrl.push(ViewtopicPage, item);
  }

  ngOnInit() {
    this.artCol = this.afs.collection('articles', ref => {
      return ref.orderBy('date', 'desc')
    });
    this.items = this.artCol.valueChanges();
  }

}
