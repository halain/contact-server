import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { PrismaService } from '../../database/prisma/prisma.service';



@Module({
    imports: [],
    controllers: [ContactController],
    providers: [ContactService, PrismaService],
    exports:[ContactService]
  })export class ContactModule {}
