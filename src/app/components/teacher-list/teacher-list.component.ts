import { Component, OnInit } from '@angular/core';
import { TeacherListDataService, Teacher } from '../../services/teacher-list-data.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];
  name:string = 'UsamaRahim';
  isToDisplayTeachers: boolean = false;

  constructor(private teacherListDataService:TeacherListDataService) {   
        console.log('TeacherListComponent constructor executed');
        this.name='Usama Rahim';
    }

  ngOnInit() {
    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
}
