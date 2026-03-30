import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

private courses = [
    {
      id: '1',
      title: 'NestJS for Beginners',
      description: 'Learn the basics of NestJS',
    },
    {
      id: '2',
      title: 'Advanced NestJS',
      description: 'Deep dive into NestJS features',
    },
    {
      id: '3',
      title: 'Advanced web tech',
      description: 'Deep dive into web dev features',
    },
    {
      id: '4',
      title: 'Machine Learning',
      description: 'Deep dive into Machine Learning features',
    },

    {
      id: '5',
      title: 'Natural language processing',
      description: 'Deep dive into NLP features',
    },
    {
      id: '6',
      title: 'Data structure',
      description: 'Deep dive into Data Structure features',
    },

    {
      id: '7',
      title: 'Mobile Application',
      description: 'Deep dive into Mobile application features',
    }
];

getAllCourses() {
    return {
      message: "All courses fetched successfully",
      data: this.courses
    };
  }


getCourseById(id: string) {
    return{
      message: "course fetched successful",
      id: id
    };
}

  
createCourse(dto:CreateCourseDto){
  return {
    message: "create course - from service",
    data: dto
  };
}

  
  updateCourse(id: string, dto: UpdateCourseDto){
    return {
      message: "course Updated",
      id:id,
      data: dto
    };
  }

patchCourse(id: string, dto: UpdateCourseDto){
  return {
    message: "patched successfully!",
    id:id,
    updateFields:Object.keys(dto)
  };
}

deleteCourse(id: string){
  return{
    message: "deleted success..!",
    id:id
  }
}

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      courseId: id,
      filename: file.filename,
      originalName: file.originalname,
      path: file.path,
    };
  }
}