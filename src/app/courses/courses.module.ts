import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    CoursesDetailComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesDetailComponent,
    PrivacyComponent

  ],
})
export class CoursesModule { }
