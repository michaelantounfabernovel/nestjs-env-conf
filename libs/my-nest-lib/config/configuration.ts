import { registerAs } from '@nestjs/config'
import { validate } from './config.validation'

// Register, validate and remap env variable to desired format
// Put default values here
// The name registered 'database' will englobe the infos validated
export default registerAs('database', () =>
  validate({
    host: process.env.DATABASE_HOST || 'host',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
  })
)
