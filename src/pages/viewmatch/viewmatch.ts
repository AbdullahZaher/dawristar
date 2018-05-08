import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viewmatch',
  templateUrl: 'viewmatch.html',
})
export class ViewmatchPage {
  hidehome:boolean = false;
  hideaway:boolean = true;
  hidehomeplayer:boolean = false;
  hideawayplayer:boolean = true;
  matchInfo: any;

  hometeamava:boolean = true;
  awayteamava:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.matchInfo = navParams.data;
  }
  showHome() {
    this.hidehome = false;
    this.hideaway = true;
  }
  showAway() {
    this.hideaway = false;
    this.hidehome = true;
  }
  showHomePlayer() {
    this.hidehomeplayer = false;
    this.hideawayplayer = true;
  }
  showAwayPlayer() {
    this.hideawayplayer = false;
    this.hidehomeplayer = true;
  }
  goBack() {
    this.navCtrl.pop();
  }

}
