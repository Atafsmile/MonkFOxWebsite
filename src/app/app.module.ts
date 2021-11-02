import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesModule } from './courses/courses.module';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CourseListModule } from './course-list/course-list.module';
import { CtlogsearchbarComponent } from './ctlogsearchbar/ctlogsearchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    FormsModule,
    CourseListModule
  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
