import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MyNestLibModule } from '@my-workspace/my-nest-lib'
import { MyNestLib2Module } from '@my-workspace/my-nest-lib2'

@Module({
  imports: [
    MyNestLibModule,
    MyNestLib2Module,
    ConfigModule.forRoot({
      cache: true,
      envFilePath: process.env.NODE_ENV === 'production' ? [] : ['.env.development'], // .env always takes precedence over .env.develop or any other env file specified (and is loaded by default)
      // But exported env variables, in a shell with 'export DATABASE_PORT=4000' for example or in a .bashrc, or passed before the application takes precedence over every env file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
