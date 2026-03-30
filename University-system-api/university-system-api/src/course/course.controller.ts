import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  getall() {
    return this.courseService.getallCourses();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.courseService.getCourseById(id);
  }
  @Post()
  create(@Body() body: any) {
    const { name, code, description, credits } = body;
    return this.courseService.createCourse(name, code, description, credits);
  }
}
