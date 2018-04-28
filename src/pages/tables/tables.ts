import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tables = [
    {
      team:'الهلال',
      order:'1',
      play: '16',
      win: '10',
      lose: '1',
      poitns:'35',
    },
    {
      team:'الأهلي',
      order:'2',
      play: '17',
      win: '10',
      lose: '3',
      poitns:'34',
    },
    {
      team:'النصر',
      order:'3',
      play: '17',
      win: '7',
      lose: '4',
      poitns:'27',
    },
  ];

}
