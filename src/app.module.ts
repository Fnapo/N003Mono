import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MisEntidadesModule } from '@app/mis-entidades';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [    // 1. Configura ConfigModule para cargar las variables de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que el ConfigModule esté disponible globalmente
      envFilePath: ['.env'], // Especifica la ruta a tu archivo .env
    }),
    // 2. Configura MongooseModule de forma asíncrona usando ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule para poder usar ConfigService
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'), // Obtiene la URL de Atlas del .env
      }),
      inject: [ConfigService], // Inyecta ConfigService en la factory
    }),
    MisEntidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
