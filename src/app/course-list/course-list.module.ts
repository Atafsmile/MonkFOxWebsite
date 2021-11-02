import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListRoutingModule } from './course-list-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CoursemoredetailComponent } from './coursemoredetail/coursemoredetail.component';
import { CtlogsearchbarComponent } from '../ctlogsearchbar/ctlogsearchbar.component';
import { Router } from '@angular/router';
import { AndroideailComponent } from './androideail/androideail.component';



@NgModule({
  declarations: [
    
    CatalogComponent,
   CoursemoredetailComponent,
   CtlogsearchbarComponent,
   AndroideailComponent
   
  ],

  imports: [
    CommonModule,
    CourseListRoutingModule,
  

    
  ],
  exports:[
    CatalogComponent
    
  ]
})
export class CourseListModule { }
