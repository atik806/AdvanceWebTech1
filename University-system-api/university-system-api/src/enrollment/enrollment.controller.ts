import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  getAll() {
    return this.enrollmentService.getEnrollments();
  }
  @Post()
  enroll(@Body() body: any) {
    const { studentName, courseId } = body;
    return this.enrollmentService.enrollStudent(studentName, courseId);
  }
}
