import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CategoryComponent } from "../components/category/category.component";
import { MoodTrackerComponent } from "../components/mood-tracker/mood-tracker.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CategoryComponent,
    MoodTrackerComponent
],
  declarations: [HomePage]
})
export class HomePageModule {}
