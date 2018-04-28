import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrendsPage } from './trends';

@NgModule({
  declarations: [
    TrendsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrendsPage),
  ],
})
export class TomorrowPageModule {}
