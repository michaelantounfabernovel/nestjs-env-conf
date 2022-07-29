import { Controller, Get } from '@nestjs/common'
import { MyNestLibService } from '@my-workspace/my-nest-lib'
import { MyNestLib2Service } from '@my-workspace/my-nest-lib2'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly myNestLibService: MyNestLibService,
    private readonly myNestLib2Service: MyNestLib2Service
  ) {}

  @Get()
  getData() {
    return this.appService.getData(
      this.myNestLibService.getDbConfig(),
      this.myNestLib2Service.getMagicValue()
    )
  }
}
