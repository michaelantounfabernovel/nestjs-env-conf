import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MagicValue } from '../../config/magicValueClass'

@Injectable()
export class MyNestLib2Service {
  constructor(private configService: ConfigService<{ magic: MagicValue }, true>) {}

  magicValue = this.configService.get('magic', { infer: true }) // Load config that was remapped
  getMagicValue(): string {
    return this.magicValue.magic_value
  }
}
