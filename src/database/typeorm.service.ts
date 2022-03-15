import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import Entities from './typeorm';
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('DATABASE_HOST'),
      port: this.configService.get('DATABASE_PORT'),
      database: this.configService.get('DATABASE_NAME'),
      username: this.configService.get('DATABASE_USER'),
      // password: this.configService.get('DATABASE_PASSWORD'),
      synchronize: true,
      entities: Entities,
    };
  }
}
