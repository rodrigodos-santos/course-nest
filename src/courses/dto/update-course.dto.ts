import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

// Com o PartialType tudo o que vem do CreateCourseDto é opcional
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
