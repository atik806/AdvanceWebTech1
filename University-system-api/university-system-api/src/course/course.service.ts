import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getallCourses() {
    return {
      message: 'All courses fetched',
      data: [],
    };
  }
  getCourseById(id: number) {
    return {
      message: 'Course fetched',
      id,
    };
  }
  createCourse(name: string, code: string, description?: string, credits?: number) {
    return {
      message: 'course created',
      data: { name, code, description, credits },
    };
  }
}
