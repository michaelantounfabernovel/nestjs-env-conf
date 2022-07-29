import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MyNestLib2Service } from './my-nest-lib2.service'
import configuration from '../../config/configuration'

@Module({
  controllers: [],
  providers: [MyNestLib2Service],
  exports: [MyNestLib2Module, MyNestLib2Service],
  imports: [ConfigModule.forFeature(configuration)],
})
export class MyNestLib2Module {
  constructor(private myNestLib2Service: MyNestLib2Service) {}
}
