import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

// rota courses
@Controller('courses')
export class CoursesController {
  // com esse constructor todos os métodos que forem criados no
  // CoursesService serão injetados nesse controller
  // é um singleton, ou seja, a instância é única na aplicação
  constructor(private readonly coursesService: CoursesService) {}

  // @Get('list')
  // findAll(@Res() response): string {
  //   return response.status(200).send('Todos Cursos');
  // }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   return `Curso #${params.id}`;
  // }
  // ABAIXO - Ao invés de usar o array de params, desestruturamos o objeto params
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `Curso #${id}`;
  // }

  // Para receber apenas um campo, informamos o mesmo dentro do @Body
  // HttpStatus é um enum global do NestJS
  // 204 será retornado pois não haverá conteúdo no retorno
  // @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  // create(@Body('name') body): string {
  //   return body;
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body): string {
  //   return `Atualização do Curso #${id} com o nome ${body.name}`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): string {
  //   return `Exclusão do Curso #${id}`;
  // }

  // ---------------------- UTILIZANDO O SERVICE --------------------
  @Get()
  findAllService() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOneService(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  createService(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  updateService(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  removeService(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
