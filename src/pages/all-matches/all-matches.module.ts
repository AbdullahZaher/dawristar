import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllMatchesPage } from './all-matches';

@NgModule({
  declarations: [
    AllMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllMatchesPage),
  ],
})
export class AllMatchesPageModule {}
