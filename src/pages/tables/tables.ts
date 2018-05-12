import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Connect Page with Firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface tableInterface {
  league: string;
  group: string;
  team: string;
  logo: string;
  points: number;
}

@IonicPage()
@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {
  tablesColA: AngularFirestoreCollection<tableInterface>;
  itemsA: Observable<tableInterface[]>;

  tablesColB: AngularFirestoreCollection<tableInterface>;
  itemsB: Observable<tableInterface[]>;

  tablesColC: AngularFirestoreCollection<tableInterface>;
  itemsC: Observable<tableInterface[]>;

  tablesColD: AngularFirestoreCollection<tableInterface>;
  itemsD: Observable<tableInterface[]>;

  tablesColE: AngularFirestoreCollection<tableInterface>;
  itemsE: Observable<tableInterface[]>;

  tablesColF: AngularFirestoreCollection<tableInterface>;
  itemsF: Observable<tableInterface[]>;

  tablesColG: AngularFirestoreCollection<tableInterface>;
  itemsG: Observable<tableInterface[]>;

  tablesColH: AngularFirestoreCollection<tableInterface>;
  itemsH: Observable<tableInterface[]>;

  league: string;
  group: string;
  team: string;
  logo: string;
  points: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public afs: AngularFirestore) {}
  
  ngOnInit() {
    this.tablesColA = this.afs.collection('tables').doc('wc2018').collection('A');
    this.itemsA = this.tablesColA.valueChanges();

    this.tablesColB = this.afs.collection('tables').doc('wc2018').collection('B');
    this.itemsB = this.tablesColB.valueChanges();

    this.tablesColC = this.afs.collection('tables').doc('wc2018').collection('C');
    this.itemsC = this.tablesColC.valueChanges();

    this.tablesColD = this.afs.collection('tables').doc('wc2018').collection('D');
    this.itemsD = this.tablesColD.valueChanges();

    this.tablesColE = this.afs.collection('tables').doc('wc2018').collection('E');
    this.itemsE = this.tablesColE.valueChanges();

    this.tablesColF = this.afs.collection('tables').doc('wc2018').collection('F');
    this.itemsF = this.tablesColF.valueChanges();

    this.tablesColG = this.afs.collection('tables').doc('wc2018').collection('G');
    this.itemsG = this.tablesColG.valueChanges();

    this.tablesColH = this.afs.collection('tables').doc('wc2018').collection('H');
    this.itemsH = this.tablesColH.valueChanges();
  }

}
