import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    ViewHomeComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
