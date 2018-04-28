import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TomorrowPage } from './tomorrow';

@NgModule({
  declarations: [
    TomorrowPage,
  ],
  imports: [
    IonicPageModule.forChild(TomorrowPage),
  ],
})
export class TomorrowPageModule {}
