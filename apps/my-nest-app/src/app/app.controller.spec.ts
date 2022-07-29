import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvironmentVariables, MyNestLibService } from '@my-workspace/my-nest-lib'
import { MyNestLib2Service } from '@my-workspace/my-nest-lib2'

describe('AppController', () => {
  let app: TestingModule

  const myNestLib: EnvironmentVariables = {
    database: {
      host: 'test host',
      port: 3306,
      username: 'test username',
      password: 'test password',
    },
  }
  const myNestLib2 = 'magic value test 2'

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .useMocker((token) => {
        if (token === MyNestLibService) {
          return { getDbConfig: jest.fn().mockReturnValue(myNestLib) }
        }
        if (token === MyNestLib2Service) {
          return { getMagicValue: jest.fn().mockReturnValue(myNestLib2) }
        }
      })
      .compile()
  })

  describe('getData', () => {
    it('should return "Welcome to my-nest-app!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getData()).toEqual({
        message: 'Welcome to my-nest-app!',
        myNestLib,
        myNestLib2,
      })
    })
  })
})
