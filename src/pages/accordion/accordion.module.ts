import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionPage } from './accordion';

@NgModule({
  declarations: [
    AccordionPage,
  ],
  imports: [
    IonicPageModule.forChild(AccordionPage),
  ],
})
export class AccordionPageModule {}
