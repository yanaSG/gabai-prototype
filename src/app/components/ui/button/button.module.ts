import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
