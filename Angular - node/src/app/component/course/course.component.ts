import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  selectedCategory: any = null;
  courses!: Course[];
  visible: boolean = false;
  formType: string = ''; // הוסף משתנה זה
constructor(private CourseService: CourseService) {}
  categories: any[] = [
      { name: 'ירושלים', key: 'A' },
      { name: 'בית שמש', key: 'M' },
      { name: 'ביתר', key: 'P' },
      { name: 'הצג הכל', key: 'R' }
  ];

  ngOnInit() {
      this.selectedCategory = this.categories[1];
      this.courses=this.CourseService.list;
  }

  showCourse(formType: string) {
    this.formType = formType; // עדכן את הערך של המשתנה
    this.visible = !this.visible;
// כאן תוכל להשתמש בתנאי לפי הסוג של הטופס ולהתאים את הפעולות בהתאם
  }






   

}
