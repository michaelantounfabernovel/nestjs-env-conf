import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'
import { Database } from './environmentVariables'

// Function that validate env variables
export function validate(config: Record<string, unknown>) {
  // Pass to plainToInstance the class validation to check conf env, here 'Database'
  const validatedConfig = plainToInstance(Database, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validatedConfig, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
