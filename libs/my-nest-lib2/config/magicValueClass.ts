import { IsString, IsNotEmpty } from 'class-validator'

// Define env variable types
export class MagicValue {
  @IsString()
  @IsNotEmpty()
  magic_value: string
}

// Class that englobe as the same as does registerAs, so here 'magic'
// No need for validation for this one
export class EnvironmentVariables {
  magic: MagicValue
}
