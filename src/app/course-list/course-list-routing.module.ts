import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroideailComponent } from './androideail/androideail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CoursemoredetailComponent } from './coursemoredetail/coursemoredetail.component';


const routes: Routes = [
  {path:'catalog',component:CatalogComponent},
  {path:'catalog/:id',component:CoursemoredetailComponent}
,  {path:'catalogs',component:AndroideailComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }
