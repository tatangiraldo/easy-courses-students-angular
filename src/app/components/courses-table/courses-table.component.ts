import { Component, OnInit } from '@angular/core';
import { courses } from './mock';
import { Course } from '../../models/course-to';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent implements OnInit{
  
  public courses?: Course[]

  ngOnInit(): void {
    this.courses = courses
  }
}
