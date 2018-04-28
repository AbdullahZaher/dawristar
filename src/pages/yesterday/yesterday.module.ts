import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YesterdayPage } from './yesterday';

@NgModule({
  declarations: [
    YesterdayPage,
  ],
  imports: [
    IonicPageModule.forChild(YesterdayPage),
  ],
})
export class YesterdayPageModule {}
