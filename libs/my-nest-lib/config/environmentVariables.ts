import { IsString, IsNumber, IsNotEmpty } from 'class-validator'

// Define env variable types
export class Database {
  @IsString()
  @IsNotEmpty()
  host: string

  @IsNumber()
  port: number

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string
}

// Class that englobe as the same as does registerAs, so here 'database'
// No need for validation for this one
export class EnvironmentVariables {
  database: Database
}
