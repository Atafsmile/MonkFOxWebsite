import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.counter-number').each(function(){
          $(this).prop('counter',0).animate({
              counter : $(this).text()
              },
              {
                  duration:4000,
                  easing:'swing',
                  step:function(now){
                  $(this).text(Math.ceil(now) + '+');
                  }

          });
      });
  });

  }
  

}
