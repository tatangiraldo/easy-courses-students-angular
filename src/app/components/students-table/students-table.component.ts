import { Component, OnInit } from '@angular/core';
import { students } from './mock';
import { Student } from '../../models/student-to';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css'
})
export class StudentsTableComponent implements OnInit{
  
  public students?: Student[]

  ngOnInit(): void {
    this.students = students
  }
}