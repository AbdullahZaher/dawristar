import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environments/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MatchesPage } from '../pages/matches/matches';
import { NewsPage } from './../pages/news/news';
import { ArticlePage } from './../pages/article/article';
import { TablesPage } from './../pages/tables/tables';
import { MediaPage } from './../pages/media/media';
import { AboutUsPage } from '../pages/about-us/about-us';
import { TrendsPage } from './../pages/trends/trends';
import { ViewnewsPage } from './../pages/viewnews/viewnews';
import { ViewtopicPage } from './../pages/viewtopic/viewtopic'
import { ViewmatchPage } from './../pages/viewmatch/viewmatch';

import { AutohideDirective } from '../directives/autohide/autohide';

// Connect app with Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MatchesPage,
    NewsPage,
    ArticlePage,
    TablesPage,
    AboutUsPage,
    TrendsPage,
    MediaPage,
    ViewnewsPage,
    ViewtopicPage,
    ViewmatchPage,
    AutohideDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MatchesPage,
    NewsPage,
    ArticlePage,
    TablesPage,
    AboutUsPage,
    TrendsPage,
    MediaPage,
    ViewnewsPage,
    ViewtopicPage,
    ViewmatchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
