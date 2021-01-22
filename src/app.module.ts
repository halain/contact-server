import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { PrismaService } from './database/prisma/prisma.service';
import { ContactModule } from './models/contact/contact.module';

@Module({
  imports: [ConfigModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


  static port: number | string;

  constructor(private readonly _configServices: ConfigService){
    AppModule.port = this._configServices.get(Configuration.PORT)
  }


}
