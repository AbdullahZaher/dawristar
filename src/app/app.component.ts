import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us';
import { MatchesPage } from '../pages/matches/matches';
import { NewsPage } from './../pages/news/news';
import { ArticlePage } from './../pages/article/article';
import { TablesPage } from './../pages/tables/tables';
import { MediaPage } from './../pages/media/media';
import { TrendsPage } from './../pages/trends/trends';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: ' الاولى ', component: HomePage },
      { title: ' المباريات ', component: MatchesPage },
      { title: ' اخبار ', component: NewsPage },
      { title: ' مقالات ', component: ArticlePage },
      { title: ' جداول الترتيب ', component: TablesPage },
      { title: ' هاشتاق ', component: TrendsPage },
      { title: ' صور وفيديو ', component: MediaPage },
      { title: ' دوري ستار ', component: AboutUsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
