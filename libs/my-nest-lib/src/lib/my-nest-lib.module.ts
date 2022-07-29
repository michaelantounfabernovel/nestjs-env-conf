import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from '../../config/configuration'
import { MyNestLibService } from './my-nest-lib.service'

@Module({
  controllers: [],
  providers: [MyNestLibService],
  exports: [MyNestLibModule, MyNestLibService],
  imports: [ConfigModule.forFeature(configuration)],
})
export class MyNestLibModule {
  constructor(private myNestLibService: MyNestLibService) {}
}
