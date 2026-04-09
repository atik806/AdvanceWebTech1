import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string[] {
        return ['Get All Courses - from Service'];

    }
    getCourseById(id: string): string {
        return `Get course with id: ${id}`;
    }
    createCourse(courseData: any): string {
        return 'Create a new course';
    }
    updateCourse(id: string, courseData: any): string {
        return `Update course with id: ${id}`;
    }
    deleteCourse(id: string): string {
        return `Delete course with id: ${id}`;
    }
}
