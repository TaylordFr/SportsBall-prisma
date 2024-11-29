import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number) {
    const team = await this.db.team.findUnique({
      where: { id },
      include: {
        players: true,
      },
    });

    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    return team;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return this.db.team.delete({
      where: { id: id }
    });


  }

  findAllWPlayers() {
    return this.db.team.findMany({
      include: { players: true }
    });
  }


}

