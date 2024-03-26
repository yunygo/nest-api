import { Global, Injectable } from '@nestjs/common';
import { ConfigService as ConfigServiceNest } from '@nestjs/config';

@Global()
@Injectable()
export class ConfigService extends ConfigServiceNest {}
