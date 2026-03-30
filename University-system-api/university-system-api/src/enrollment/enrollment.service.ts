import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';
@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CourseService,
    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationService,
  ) {}

  getEnrollments() {
    return {
      message: 'all enrollments fetched',
      data: [],
    };
  }
  enrollStudent(studentName: string, courseId: number) {
    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(
      studentName,
      'enrollment success',
    );
    return {
      message: 'student enrolled',
      course,
      notification,
    };
  }
}
