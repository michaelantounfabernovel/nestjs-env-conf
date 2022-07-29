import { registerAs } from '@nestjs/config'
import { validate } from './config.validation'
import { magicValue } from './magicValue'

// Register, validate and remap env variable to desired format
// Put default values here
// The name registered 'magic' will englobe the infos validated
export default registerAs('magic', () => validate({ magic_value: magicValue }))
