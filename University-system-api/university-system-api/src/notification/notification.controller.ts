import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('sent')
  send(@Body() body: any) {
    const { studentName, message } = body;
    return this.notificationService.sendNotification(studentName, message);
  }
  @Post('check')
  check(@Body() body: any) {
    const { studentName, courseId } = body;
    return this.notificationService.checkEnrollmentStatus(
      studentName,
      courseId,
    );
  }
}
