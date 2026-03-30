import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';
@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: `Notification sent`,
      studentName,
      text: message,
    };
  }

  checkEnrollmentStatus(studentName: string, courseId: number) {
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: 'Enrollment checked',
      studentName,
      courseId,
      enrollments,
    };
  }
}
