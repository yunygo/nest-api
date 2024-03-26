import * as bcrypt from 'bcrypt';
import { ConfigService } from './config/config.service';

export class Utils {
  constructor(private readonly configService: ConfigService) {}

  async hash(pwd: string) {
    return await bcrypt.hash(pwd, +this.configService.get('SALT_ROUNDS'));
  }
}
