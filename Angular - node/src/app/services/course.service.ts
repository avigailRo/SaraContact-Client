import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  list:Array<Course>=[
    new Course(1, "ציור", "שלישי",new DatePipe('15:00:00'), new DatePipe('16:00:00'),"ביתר"),
    new Course(2, "אפיה", "רביעי",new DatePipe('15:00:00'), new DatePipe('16:00:00'),"בית שמש"),
    new Course(3, "התעמלות", "שלישי",new DatePipe('16:00:00'), new DatePipe('17:00:00'),"ירושלים"),
    new Course(3, "התעמלות", "שלישי",new DatePipe('17:00:00'), new DatePipe('18:00:00'),"ירושלים"),
    new Course(4, "שחיה", "ראשון",new DatePipe('15:00:00'), new DatePipe('16:00:00'),"בית שמש")
  ];
}
