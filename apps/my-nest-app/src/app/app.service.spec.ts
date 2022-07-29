import { Test } from '@nestjs/testing'
import { EnvironmentVariables } from '@my-workspace/my-nest-lib'

import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  const myNestLibDatabaseConfig: EnvironmentVariables = {
    database: {
      host: 'host',
      port: 3306,
      username: 'root',
      password: 'password',
    },
  }
  const myNestLib2 = 'my magic value test'

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    service = app.get<AppService>(AppService)
  })

  describe('getData', () => {
    it('should return "Welcome to my-nest-app!"', () => {
      expect(service.getData(myNestLibDatabaseConfig, myNestLib2)).toEqual({
        message: 'Welcome to my-nest-app!',
        myNestLib: myNestLibDatabaseConfig,
        myNestLib2,
      })
    })
  })
})
