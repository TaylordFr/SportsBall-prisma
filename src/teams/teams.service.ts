import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private readonly db: PrismaService) { }

  create(createTeamDto: CreateTeamDto) {
    return "This action adds a new team"
  }

  findAll() {
    return this.db.team.findMany();
  }

  findOne(id: number) {
    return this.db.team.findUnique({
      where: { id }
    });

  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return this.db.team.delete({
      where: { id: id }
    });
  }
}
