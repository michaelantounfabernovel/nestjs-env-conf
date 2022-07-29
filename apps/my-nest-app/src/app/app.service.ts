import { Injectable } from '@nestjs/common'
import { EnvironmentVariables } from '@my-workspace/my-nest-lib'

@Injectable()
export class AppService {
  getData(
    myNestLibDatabaseConfig: EnvironmentVariables,
    myNestLib2: string
  ): {
    message: string
    myNestLib: EnvironmentVariables
    myNestLib2: string
  } {
    return {
      message: 'Welcome to my-nest-app!',
      myNestLib: myNestLibDatabaseConfig,
      myNestLib2: myNestLib2,
    }
  }
}
