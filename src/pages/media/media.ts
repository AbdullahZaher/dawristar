import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  medias = [
    {
      img:'https://i2-prod.mirror.co.uk/incoming/article11843800.ece/ALTERNATES/s615b/THP_CHP_130118SLUG_1261JPG.jpg',
      title:'ليفربول يمنح قميص الأسطورة لصفقته الجديدة',
    },
    {
      img:'http://img.kooora.com/?i=reuters%2f2018-01-13%2f2018-01-13t132335z_326723634_rc12356bc180_rtrmadp_3_soccer-spain-fcb-mina_reuters.jpg',
      title:'برشلونة يقدم ياري مينا للجماهير',
    },
    {
      img:'http://img.kooora.com/?i=epa%2fsoccer%2f2018-01%2f2018-01-12%2f2018-01-12-06434110_epa.jpg',
      title:'سوبر 2018 لحظة لن ينساها عاشور',
    },
    {
      img:'http://img.kooora.com/?i=ali.18/2018/1/9/1/47FA3D7F00000578-0-image-a-13_1515586715083.jpg',
      title:'محاولة فاشلة من رونالدو لخداع الجماهير',
    },
  ];

}
