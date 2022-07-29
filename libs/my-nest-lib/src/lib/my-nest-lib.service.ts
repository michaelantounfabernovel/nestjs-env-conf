import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { EnvironmentVariables } from '../../config/environmentVariables'

@Injectable()
export class MyNestLibService {
  constructor(private configService: ConfigService<EnvironmentVariables, true>) {} // Pass to ConfigService the type that englobe the registerAs
  dbConfig = this.configService.get('database', { infer: true }) // Load config that was remapped

  getDbConfig(): EnvironmentVariables {
    // Here we will return the same type as registerAs for test purpose
    return { database: this.dbConfig }
  }
}
